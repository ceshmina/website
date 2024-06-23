import { Collection } from '@/core/model/base'
import { PhotoCollection } from '@/core/model/photo'

class Diary {
  private _slug: string
  private _content: string
  private _title: string | null
  private _location: string | null
  private _photos: PhotoCollection

  constructor(slug: string, title: string | null, location: string | null, content: string, photos: PhotoCollection) {
    this._slug = slug
    this._title = title
    this._location = location
    this._content = content
    this._photos = photos
  }

  static async bySlug(slug: string): Promise<Diary> {
    const res = await (await fetch(`/api/diary/entry/${slug}`)).json()
    const photos = await PhotoCollection.byUrls(res.photoUrls)
    return new Diary(slug, res.title || null, res.location || null, res.content, photos)
  }
}

class DiaryCollection extends Collection<Diary> {
  static async bySlugs(slugs: string[]): Promise<DiaryCollection> {
    const diaries = await Promise.all(slugs.map(async slug => await Diary.bySlug(slug)))
    return new DiaryCollection(diaries)
  }
}
