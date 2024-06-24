import { Collection } from '@/core/model/base'
import { PhotoUrl, PhotoCollection } from '@/core/model/photo'
import { type FetchDiaryResponse, fetchDiaries, fetchDiaryBySlug } from '@/core/retrieve/diary'
import { extractPhotoUrls } from '@/core/util/markdown'

const fetchResponseToDiary = async (res: FetchDiaryResponse): Promise<Diary> => {
  const { slug, metadata, content } = res
  const title = metadata.title || null
  const location = metadata.location || null
  const photoUrls = extractPhotoUrls(content).map(url => new PhotoUrl(url))
  const photos = await PhotoCollection.fetchByUrls(photoUrls)
  return new Diary(slug, content, title, location, photos)
}

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

  static async fetchBySlug(slug: string): Promise<Diary | null> {
    const res = await fetchDiaryBySlug(slug)
    if (res) {
      return await fetchResponseToDiary(res)
    } else {
      return null
    }
  }
}

class DiaryCollection extends Collection<Diary> {
  static async fetch(): Promise<DiaryCollection> {
    const ress = await fetchDiaries()
    return new DiaryCollection(await Promise.all(
      ress.map(async res => await fetchResponseToDiary(res))
    ))
  }
}
