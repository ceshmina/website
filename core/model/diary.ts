import { parse, format } from 'date-fns'

import { Collection } from '@/core/model/base'
import { PhotoUrl, PhotoCollection } from '@/core/model/photo'
import { type FetchDiaryResponse, fetchDiaries, fetchDiaryBySlug } from '@/core/source/diary'
import { extractPhotoUrls, extractTextOnly } from '@/core/util/markdown'


const DEFAULT_LOCATION = 'Tokyo, Japan'

const fetchResponseToDiary = async (res: FetchDiaryResponse): Promise<Diary> => {
  const { slug, metadata, content } = res
  const title = metadata.title || null
  const location = metadata.location || DEFAULT_LOCATION
  const photoUrls = extractPhotoUrls(content).map(url => new PhotoUrl(url))
  const photos = await PhotoCollection.fetchByUrls(photoUrls)
  return new Diary(slug, content, title, location, photos)
}

export class Diary {
  private _slug: string
  private _date: Date
  private _content: string
  private _title: string | null
  private _location: string | null
  private _photos: PhotoCollection

  constructor(slug: string, content: string, title: string | null, location: string | null, photos: PhotoCollection) {
    this._slug = slug
    this._date = parse(slug, 'yyyyMMdd', new Date())
    this._content = content
    this._title = title
    this._location = location
    this._photos = photos
  }

  get slug(): string { return this._slug }
  get date(): Date { return this._date }
  get content(): string { return this._content }
  get location(): string | null { return this._location }
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
}
