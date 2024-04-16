import { parse, format } from 'date-fns'
import matter from 'gray-matter'

export class Diary {
  slug: string
  date: Date
  title: string | null
  content: string

  constructor(slug: string, mdContent: string) {
    this.slug = slug
    this.date = parse(slug, 'yyyyMMdd', new Date())
    const { data, content } = matter(mdContent)
    this.title = data.title || null
    this.content = content
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
      urls.push(match[1])
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

export class Camera {
  public slug: string
  public name: string
  exif: string

  static cameraMaster = [
    { slug: 'ilce-7m3', name: 'α7 III', exif: 'ILCE-7M3' },
    { slug: 'sel24105g', name: 'FE 24-105mm F4 G OSS', exif: 'FE 24-105mm F4 G OSS' },
    { slug: 'sel70300g', name: 'FE 70-300mm F4.5-5.6 G OSS', exif: 'FE 70-300mm F4.5-5.6 G OSS' },
    { slug: 'sel24f28g', name: 'FE 24mm F2.8 G', exif: 'FE 24mm F2.8 G' },
    { slug: 'sel40f25g', name: 'FE 40mm F2.5 G', exif: 'FE 40mm F2.5 G' },
    { slug: 'sel90m28g', name: 'FE 90mm F2.8 Macro G OSS', exif: 'FE 90mm F2.8 Macro G OSS' },
    { slug: 'sel1635z', name: 'Vario-Tessar T* FE 16-35mm F4 ZA OSS', exif: 'FE 16-35mm F4 ZA OSS' },
    { slug: 'sel55f18z', name: 'Sonnar T* FE 55mm F1.8 ZA', exif: 'FE 55mm F1.8 ZA' }
  ]

  constructor(slug: string, name: string, exif: string) {
    this.slug = slug
    this.name = name
    this.exif = exif
  }

  static bySlug(slug: string): Camera | null {
    const camera = Camera.cameraMaster.find(camera => camera.slug === slug)
    if (camera) {
      return new Camera(camera.slug, camera.name, camera.exif)
    } else {
      return null
    }
  }

  static byExif(exif: string): Camera | null {
    const camera = Camera.cameraMaster.find(camera => camera.exif === exif)
    if (camera) {
      return new Camera(camera.slug, camera.name, camera.exif)
    } else {
      return null
    }
  }
}

export class Exif {
  public model: string | null
  public lens: string | null

  constructor(model: string | null, lens: string | null) {
    this.model = model
    this.lens = lens
  }

  get showModel(): string {
    return this.model === 'ILCE-7M3' ? 'α7 III'
      : this.model || ''
  }

  get showLens(): string {
    return this.lens === 'FE 55mm F1.8 ZA' ? 'Sonnar T* FE 55mm F1.8 ZA'
      : this.lens || ''
  }

  public get showCamera(): string {
    if (this.showModel && this.showLens) {
      return `${this.showModel} / ${this.showLens}`
    } else if (this.showModel) {
      return this.showModel
    } else if (this.showLens) {
      return this.showLens
    } else {
      return ''
    }
  }
}
