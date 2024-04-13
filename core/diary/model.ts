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

export class Exif {
  model: string | null
  lens: string | null

  constructor(model: string | null, lens: string | null) {
    this.model = model
    this.lens = lens
  }

  public get showModel(): string {
    return this.model || ''
  }

  public get showLens(): string {
    return this.lens || ''
  }
}
