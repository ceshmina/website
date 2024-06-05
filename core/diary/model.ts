import { parse, format } from 'date-fns'
import matter from 'gray-matter'

export class Diary {
  slug: string
  date: Date
  title: string | null
  location: string
  content: string

  constructor(slug: string, mdContent: string) {
    this.slug = slug
    this.date = parse(slug, 'yyyyMMdd', new Date())
    const { data, content } = matter(mdContent)
    this.title = data.title || null
    this.location = data.location || 'Tokyo, Japan'
    this.content = content
  }

  public get month(): string {
    return format(this.date, 'yyyyMM')
  }

  public get showDate(): string {
    return format(this.date, 'yyyy年M月d日')
  }

  public get showTitle(): string {
    return this.title ? `${this.showDate} - ${this.title}` : this.showDate
  }

  public contentNoImgs(): string {
    return this.content.replace(/!\[.*\]\(.*\)/g, '')
  }

  imgUrls(): string[] {
    const regex = /!\[.*\]\((.*)\)/g
    const urls: string[] = []
    let match: RegExpExecArray | null
    while (match = regex.exec(this.content)) {
      urls.push(match[1].split(' ')[0])
    }
    return urls
  }

  public thumbnailUrls(): string[] {
    return this.imgUrls().map(url => url.replace('medium', 'thumbnail'))
  }
}

export class DiaryCollection {
  items: Diary[]

  constructor(diaries: Diary[]) {
    this.items = diaries
  }

  public get sorted(): Diary[] {
    return this.items.sort((a, b) => b.date.getTime() - a.date.getTime())
  }

  public findBySlug(slug: string): { diary: Diary, prev: Diary | null, next: Diary | null } | null {
    for (let i = 0; i < this.items.length; i++) {
      const diary = this.items[i]
      if (diary.slug === slug) {
        return {
          diary: diary,
          prev: i > 0 ? this.items[i - 1] : null,
          next: i < this.items.length - 1 ? this.items[i + 1] : null
        }
      }
    }
    return null
  }
}

export class Month {
  public slug: string
  public name: string

  constructor(slug: string, name: string) {
    this.slug = slug
    this.name = name
  }

  static bySlug(slug: string): Month {
    const date = parse(slug, 'yyyyMM', new Date())
    return new Month(slug, format(date, 'yyyy年M月'))
  }
}

export class Camera {
  type: string
  public slug: string
  public name: string
  exif: string

  static cameraMaster = [
    { type: 'camera', slug: 'ilce-7m3', name: 'α7 III', exif: 'ILCE-7M3' },
    { type: 'camera', slug: 'ilce-7s', name: 'α7S', exif: 'ILCE-7S' },
    { type: 'camera', slug: 'a2402', name: 'iPhone 12', exif: 'foodie' },
    { type: 'camera', slug: 'a2402', name: 'iPhone 12', exif: 'iPhone 12' },
    { type: 'camera', slug: 'a3101', name: 'iPhone 15 Pro', exif: 'iPhone 15 Pro' },
    { type: 'camera', slug: 'dc-gf9', name: 'LUMIX GF9', exif: 'DC-GF9' },
    { type: 'camera', slug: 'd5600', name: 'D5600', exif: 'NIKON D5600' },
    { type: 'lens', slug: 'sel24105g', name: 'FE 24-105mm F4 G OSS', exif: 'FE 24-105mm F4 G OSS' },
    { type: 'lens', slug: 'sel70300g', name: 'FE 70-300mm F4.5-5.6 G OSS', exif: 'FE 70-300mm F4.5-5.6 G OSS' },
    { type: 'lens', slug: 'sel24f28g', name: 'FE 24mm F2.8 G', exif: 'FE 24mm F2.8 G' },
    { type: 'lens', slug: 'sel40f25g', name: 'FE 40mm F2.5 G', exif: 'FE 40mm F2.5 G' },
    { type: 'lens', slug: 'sel90m28g', name: 'FE 90mm F2.8 Macro G OSS', exif: 'FE 90mm F2.8 Macro G OSS' },
    { type: 'lens', slug: 'sel1635z', name: 'Vario-Tessar T* FE 16-35mm F4 ZA OSS', exif: 'FE 16-35mm F4 ZA OSS' },
    { type: 'lens', slug: 'sel55f18z', name: 'Sonnar T* FE 55mm F1.8 ZA', exif: 'FE 55mm F1.8 ZA' },
    { type: 'lens', slug: 'cy50f14', name: 'CONTAX Planar T* 50mm F1.4 AE', exif: 'CONTAX Planar T* 50mm F1.4 AE' },
    { type: 'lens', slug: 'h-h025', name: 'LUMIX G 25mm F1.7 Asph.', exif: 'LUMIX G 25/F1.7' },
    { type: 'lens', slug: 'h-fs12032', name: 'LUMIX G Vario 12-32mm F3.5-5.6 Asph. Mega O.I.S.', exif: 'LUMIX G VARIO 12-32/F3.5-5.6' },
    { type: 'lens', slug: 'fdx1855', name: 'AF-P DX NIKKOR 18-55mm F3.5-5.6G VR', exif: '18.0-55.0 mm f/3.5-5.6' },
    { type: 'lens', slug: 'fdx70300', name: 'AF-P DX NIKKOR 70-300mm F4.5-6.3G ED VR', exif: '70.0-300.0 mm f/4.5-6.3' },
    { type: 'lens', slug: 'fdx35f18', name: 'AF-S DX NIKKOR 35mm F1.8G', exif: '35.0 mm f/1.8' }
  ]

  constructor(type: string, slug: string, name: string, exif: string) {
    this.type = type
    this.slug = slug
    this.name = name
    this.exif = exif
  }

  static bySlug(slug: string): Camera | null {
    const camera = Camera.cameraMaster.find(camera => camera.slug === slug)
    if (camera) {
      return new Camera(camera.type, camera.slug, camera.name, camera.exif)
    } else {
      return null
    }
  }

  static byExif(exif: string): Camera | null {
    const camera = Camera.cameraMaster.find(camera => camera.exif === exif)
    if (camera) {
      return new Camera(camera.type, camera.slug, camera.name, camera.exif)
    } else {
      return null
    }
  }
}

export class Exif {
  public model: string | null
  public lens: string | null
  public focalLength: string | null
  public focalLength35: string | null
  public fNumber: string | null
  public exposureTime: string | null
  public isoSpeedRatings: string | null

  constructor(
    model: string | null,
    lens: string | null,
    focalLength: string | null,
    focalLength35: string | null,
    fNumber: string | null,
    exposureTime: string | null,
    isoSpeedRatings: string | null
  ) {
    this.model = model
    this.lens = lens
    this.focalLength = focalLength
    this.focalLength35 = focalLength35
    this.fNumber = fNumber
    this.exposureTime = exposureTime
    this.isoSpeedRatings = isoSpeedRatings
  }
}

export class Location {
  public slug: string
  public name: string

  constructor(slug: string, name: string) {
    this.slug = slug
    this.name = name
  }

  static bySlug(slug: string): Location {
    const name = decodeURIComponent(slug)
    return new Location(slug, name)
  }

  static byName(name: string): Location {
    const slug = encodeURIComponent(name)
    return new Location(slug, name)
  }
}

export class Photo {
  public imgUrl: string
  public thumbnailUrl: string
  public date: string
  public diaryLink: string
  public diaryTitle: string

  constructor(imgUrl: string, thumbnailUrl: string, date: string, diaryLink: string, diaryTitle: string) {
    this.imgUrl = imgUrl
    this.thumbnailUrl = thumbnailUrl
    this.date = date
    this.diaryLink = diaryLink
    this.diaryTitle = diaryTitle
  }
}
