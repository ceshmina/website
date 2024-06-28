import { parse, format } from 'date-fns'

import { Collection } from '@/core/model/base'
import { Month } from '@/core/model/datetime'
import { CAMERA_MASTER, PhotoUrl, PhotoCollection } from '@/core/model/photo'
import { type FetchDiaryResponse, fetchDiaries, fetchDiaryBySlug } from '@/core/source/diary'
import { extractPhotoUrls, extractTextOnly } from '@/core/util/markdown'


const DEFAULT_LOCATION = 'Tokyo, Japan'

const fetchResponseToDiary = async (res: FetchDiaryResponse): Promise<Diary> => {
  const { slug, metadata, content } = res
  const title = metadata.title || null
  const location = metadata.location
  const photoUrls = extractPhotoUrls(content).map(url => new PhotoUrl(url))
  const photos = await PhotoCollection.fetchByUrls(photoUrls)
  return new Diary(slug, content, title, location, photos)
}

export class Diary {
  private _slug: string
  private _date: Date
  private _month: Month
  private _content: string
  private _title: string | null
  private _location: string
  private _photos: PhotoCollection

  constructor(slug: string, content: string, title: string | null, location: string | null, photos: PhotoCollection) {
    this._slug = slug
    this._date = parse(slug, 'yyyyMMdd', new Date())
    this._month = this._date.getFullYear() < 2023 ?
      new Month(slug.substring(0, 4)) :
      new Month(slug.substring(0, 6))
    this._content = content
    this._title = title
    this._location = location || DEFAULT_LOCATION
    this._photos = photos
  }

  get slug(): string { return this._slug }
  get date(): Date { return this._date }
  get month(): string { return this._month.slug }
  get content(): string { return this._content }
  get location(): string { return this._location }
  get photos(): PhotoCollection { return this._photos }

  static async fetchBySlug(slug: string): Promise<Diary | null> {
    const res = await fetchDiaryBySlug(slug)
    if (res) {
      return await fetchResponseToDiary(res)
    } else {
      return null
    }
  }

  showDate(): string {
    return format(this._date, 'yyyy年M月d日')
  }

  showMonth(): string {
    return this._month.name
  }

  showTitle(): string {
    return this._title ? this.showDate() + ` - ${this._title}` : this.showDate()
  }

  contentTextOnly(): string {
    return extractTextOnly(this._content)
  }
}

export class DiaryCollection extends Collection<Diary, DiaryCollection> {
  protected create(items: Diary[]): DiaryCollection {
    return new DiaryCollection(items)
  }

  static async fetch(): Promise<DiaryCollection> {
    const ress = await fetchDiaries()
    return new DiaryCollection(await Promise.all(
      ress.map(async res => await fetchResponseToDiary(res))
    ))
  }

  filterByDate(date: Date, pastOnly: boolean = true): DiaryCollection {
    const filtered = this._items.filter(d =>
      d.date.getMonth() === date.getMonth() && d.date.getDate() === date.getDate()
    )
    if (pastOnly) {
      return this.create(filtered.filter(d => d.date < date))
    } else {
      return this.create(filtered)
    }
  }

  aggByMonth(reverse: boolean = true): { month: Month, count: number }[] {
    const counts: Map<string, number> = new Map()
    this._items.forEach(diary => {
      const slug = diary.month
      const count = counts.get(slug) || 0
      counts.set(slug, count + 1)
    })

    const res = Array.from(counts.entries())
    const sorted = reverse ?
      res.sort((a, b) => b[0].localeCompare(a[0])) :
      res.sort((a, b) => a[0].localeCompare(b[0]))
    
    return sorted.map(([slug, count]) => ({ month: new Month(slug), count }))
  }

  aggByCameras(): { camera: string, count: number }[] {
    const cameras = this._items.map(diary => diary.photos.uniqueCameras())
    const counts: Map<string, number> = new Map()
    cameras.flat().forEach(name => {
      const count = counts.get(name) || 0
      counts.set(name, count + 1)
    })
    const masters = Array.from(new Set(CAMERA_MASTER.map(c => c.name)))
    return masters.map(camera => ({ camera, count: counts.get(camera) || 0 }))
  }

  aggByLocation(): { location: string, count: number }[] {
    const counts: Map<string, number> = new Map()
    this._items.forEach(diary => {
      const location = diary.location
      const count = counts.get(location) || 0
      counts.set(location, count + 1)
    })
    return Array.from(counts.entries())
      .map(([location, count]) => ({ location, count }))
      .sort((a, b) => a.location.localeCompare(b.location))
  }
}
