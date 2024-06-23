import { Collection } from '@/core/model/base'
import { PhotoUrl, PhotoCollection } from '@/core/model/photo'
import { getDiaryBySlug } from '@/core/retrieve/diary'
import { extractPhotoUrls } from '@/core/util/markdown'

class Diary {
  private _slug: string
  private _content: string
  private _title: string | null
  private _location: string | null
  private _photos: PhotoCollection

  constructor(slug: string, content: string, title: string | null, location: string | null, photos: PhotoCollection) {
    this._slug = slug
    this._content = content
    this._title = title
    this._location = location
    this._photos = photos
  }

  static async bySlug(slug: string): Promise<Diary | null> {
    const res = await getDiaryBySlug(slug)
    if (!res) return null
    const photoUrls = extractPhotoUrls(res.content).map(url => new PhotoUrl(url))
    const photos = await PhotoCollection.byUrls(photoUrls)
    return new Diary(slug, res.title, res.location, res.content, photos)
  }
}

class DiaryCollection extends Collection<Diary> {
  static async bySlugs(slugs: string[]): Promise<DiaryCollection> {
    const diaries = await Promise.all(slugs.map(async slug => await Diary.bySlug(slug)))
    return new DiaryCollection(diaries.filter(diary => diary !== null) as Diary[])
  }
}
