import { parse, format } from 'date-fns'
import matter from 'gray-matter'

import {
  DEFAULT_LOCATION,
  IMAGE_DEFAULT_PREFIX, IMAGE_THUMBNAIL_PREFIX, IMAGE_EXIF_PREFIX,
  CAMERA_MASTER
} from '@/core/const'


export class Diary {
  private _slug: string
  private _date: Date
  private _title: string | null
  private _location: string
  private _content: string
  private _imageUrls: ImageUrl[]

  constructor(slug: string, mdContent: string) {
    this._slug = slug
    this._date = parse(slug, 'yyyyMMdd', new Date())
    const { data, content } = matter(mdContent)
    this._title = data.title || null
    this._location = data.location || DEFAULT_LOCATION
    this._content = content

    const regex = /!\[.*\]\((.*)\)/g
    const urls: string[] = []
    let match: RegExpExecArray | null
    while (match = regex.exec(this._content)) {
      urls.push(match[1].split(' ')[0])
    }
    this._imageUrls = urls.map(url => new ImageUrl(url))
  }

  get slug(): string { return this._slug }
  get date(): Date { return this._date }
  get title(): string | null { return this._title }
  get location(): string { return this._location }
  get content(): string { return this._content }
  get imageUrls(): ImageUrl[] { return this._imageUrls }

  get month(): string {
    if (this._date <= new Date('2022-12-31')) {
      return format(this._date, 'yyyy')
    } else {
      return format(this._date, 'yyyyMM')
    }
  }

  showDate(): string {
    return format(this._date, 'yyyy年M月d日')
  }
  showTitle(): string {
    return this._title ? `${this.showDate()} - ${this._title}` : this.showDate()
  }

  contentTextOnly(): string {
    return this._content.replace(/---/g, '')
      .replace(/!\[.*\]\(.*\)/g, '')
      .replace(/\[.*\]\(.*\)/g, '')
  }

  imageDefaultUrls(): string[] {
    return this._imageUrls.map(url => url.url)
  }
  imageThumbnailUrls(): string[] {
    return this._imageUrls.map(url => url.thumbnailUrl)
  }
}


type DiarySearchResult = { diary: Diary, prev: Diary | null, next: Diary | null } | null

export class DiaryCollection {
  private _items: Diary[]

  constructor(diaries: Diary[]) {
    this._items = diaries
  }

  get items(): Diary[] { return this._items }

  sorted(reverse: boolean = true): DiaryCollection {
    const items = reverse ?
      this._items.sort((a, b) => b.date.getTime() - a.date.getTime()) :
      this._items.sort((a, b) => a.date.getTime() - b.date.getTime())
    return new DiaryCollection(items)
  }

  findBySlug(slug: string): DiarySearchResult {
    for (let i = 0; i < this._items.length; i++) {
      const diary = this._items[i]
      if (diary.slug === slug) {
        return {
          diary: diary,
          prev: i > 0 ? this._items[i - 1] : null,
          next: i < this._items.length - 1 ? this._items[i + 1] : null
        }
      }
    }
    return null
  }

  filterByMonth(month: string): DiaryCollection {
    return new DiaryCollection(this._items.filter(diary => diary.month === month))
  }
}


export class Month {
  private _slug: string
  private _name: string

  constructor(slug: string, name: string) {
    this._slug = slug
    this._name = name
  }

  get slug(): string { return this._slug }
  get name(): string { return this._name }

  static bySlug(slug: string): Month {
    if (slug.length === 4) {
      const date = parse(slug, 'yyyy', new Date())
      return new Month(slug, format(date, 'yyyy年'))
    } else {
    const date = parse(slug, 'yyyyMM', new Date())
    return new Month(slug, format(date, 'yyyy年M月'))
    }
  }
}


export class ImageUrl {
  private _url: string
  private _thumbnailUrl: string
  private _exifUrl: string

  constructor(url: string) {
    this._url = url
    this._thumbnailUrl = url.replace(IMAGE_DEFAULT_PREFIX, IMAGE_THUMBNAIL_PREFIX)
    this._exifUrl = url.split(' ')[0]
      .replace(IMAGE_DEFAULT_PREFIX, IMAGE_EXIF_PREFIX)
      .replace('.jpg', '.json')
      .replace('.webp', '.json')
  }

  get url(): string { return this._url }
  get thumbnailUrl(): string { return this._thumbnailUrl }
  get exifUrl(): string { return this._exifUrl }
}


export class Photo {
  private _imageUrl: string
  private _thumbnailUrl: string
  private _date: string
  private _diaryLink: string
  private _diaryTitle: string

  constructor(imageUrl: string, thumbnailUrl: string, date: string, diaryLink: string, diaryTitle: string) {
    this._imageUrl = imageUrl
    this._thumbnailUrl = thumbnailUrl
    this._date = date
    this._diaryLink = diaryLink
    this._diaryTitle = diaryTitle
  }

  get imageUrl(): string { return this._imageUrl }
  get thumbnailUrl(): string { return this._thumbnailUrl }
  get date(): string { return this._date }
  get diaryLink(): string { return this._diaryLink }
  get diaryTitle(): string { return this._diaryTitle }
}


export class Camera {
  private _type: string
  private _name: string

  constructor(type: string, name: string) {
    this._type = type
    this._name = name
  }

  get type(): string { return this._type }
  get name(): string { return this._name }

  get slug(): string {
    return encodeURIComponent(this._name)
  }

  static bySlug(slug: string): Camera | null {
    const name = decodeURIComponent(slug)
    const camera = CAMERA_MASTER.find(camera => camera.name === name)
    if (camera) {
      return new Camera(camera.type, camera.name)
    } else {
      return null
    }
  }
  static byExif(exif: string): Camera | null {
    const camera = CAMERA_MASTER.find(camera => camera.exif === exif)
    if (camera) {
      return new Camera(camera.type, camera.name)
    } else {
      return null
    }
  }
}

export class Exif {
  private _model: string | null
  private _lens: string | null
  private _focalLength: string | null
  private _focalLength35: string | null
  private _fNumber: string | null
  private _exposureTime: string | null
  private _isoSpeedRatings: string | null

  constructor(
    model: string | null,
    lens: string | null,
    focalLength: string | null,
    focalLength35: string | null,
    fNumber: string | null,
    exposureTime: string | null,
    isoSpeedRatings: string | null
  ) {
    this._model = model
    this._lens = lens
    this._focalLength = focalLength
    this._focalLength35 = focalLength35
    this._fNumber = fNumber
    this._exposureTime = exposureTime
    this._isoSpeedRatings = isoSpeedRatings
  }

  get model(): string | null { return this._model }
  get lens(): string | null { return this._lens }
  get focalLength(): string | null { return this._focalLength }
  get focalLength35(): string | null { return this._focalLength35 }
  get fNumber(): string | null { return this._fNumber }
  get exposureTime(): string | null { return this._exposureTime }
  get isoSpeedRatings(): string | null { return this._isoSpeedRatings }
}


export class Location {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string { return this._name }

  get slug(): string {
    return encodeURIComponent(this._name)
  }

  static bySlug(slug: string): Location {
    const name = decodeURIComponent(slug)
    return new Location(name)
  }
}
