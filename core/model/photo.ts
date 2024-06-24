import { Collection } from '@/core/model/base'

const PHOTOURL_DEFAULT_PREFIX = 'medium'
const PHOTOURL_THUMBNAIL_PREFIX = 'thumbnail'
const PHOTOURL_EXIF_PREFIX = 'exif'

export class PhotoUrl {
  private _url: string
  private _thumbnailUrl: string
  private _exifUrl: string

  constructor(url: string) {
    this._url = url
    this._thumbnailUrl = url.replace(PHOTOURL_DEFAULT_PREFIX, PHOTOURL_THUMBNAIL_PREFIX)
    this._exifUrl = url
      .replace(PHOTOURL_DEFAULT_PREFIX, PHOTOURL_EXIF_PREFIX)
      .replace('.jpg', '.json')
  }

  get exifUrl(): string { return this._exifUrl }
}

class Exif {
  private _model: string | null
  private _lens: string | null
  private _focalLength: string | null
  private _focalLength35: string | null
  private _fNumber: string | null
  private _exposureTime: string | null
  private _isoSensitivity: string | null

  constructor(
    model: string | null,
    lens: string | null,
    focalLength: string | null,
    focalLength35: string | null,
    fNumber: string | null,
    exposureTime: string | null,
    isoSensitivity: string | null
  ) {
    this._model = model
    this._lens = lens
    this._focalLength = focalLength
    this._focalLength35 = focalLength35
    this._fNumber = fNumber
    this._exposureTime = exposureTime
    this._isoSensitivity = isoSensitivity
  }
}

class Photo {
  private _url: PhotoUrl
  private _exif: Exif

  constructor(url: PhotoUrl, exif: Exif) {
    this._url = url
    this._exif = exif
  }

  static async fetchByUrl(url: PhotoUrl): Promise<Photo | null> {
    try {
      const res = await (await fetch(url.exifUrl)).json()
      const exif = new Exif(
        res.Model || null,
        res.LensModel || null,
        res.FocalLength || null,
        res.FocalLengthIn35mmFilm || null,
        res.FNumber || null,
        res.ExposureTime || null,
        res.ISOSpeedRatings || null
      )
      return new Photo(url, exif)
    } catch (_) {
      return null
    }
  }
}

export class PhotoCollection extends Collection<Photo> {
  static async fetchByUrls(urls: PhotoUrl[]): Promise<PhotoCollection> {
    const photos = await Promise.all(
      urls.map(async url => await Photo.fetchByUrl(url))
    )
    return new PhotoCollection(photos.filter(photo => photo !== null) as Photo[])
  }
}
