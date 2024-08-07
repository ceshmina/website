import { Collection } from '@/core/model/base'

const PHOTOURL_DEFAULT_PREFIX = 'medium'
const PHOTOURL_THUMBNAIL_PREFIX = 'thumbnail'
const PHOTOURL_EXIF_PREFIX = 'exif'

export const CAMERA_MASTER = [
  { name: 'α7 III', exif: 'ILCE-7M3' },
  { name: 'α7S', exif: 'ILCE-7S' },
  { name: 'LUMIX GF9', exif: 'DC-GF9' },
  { name: 'PEN E-P7', exif: 'E-P7' },
  { name: 'D5600', exif: 'NIKON D5600' },
  { name: 'Vario-Tessar T* FE 16-35mm F4 ZA OSS', exif: 'FE 16-35mm F4 ZA OSS' },
  { name: 'FE 20-70mm F4 G', exif: 'FE 20-70mm F4 G' },
  { name: 'FE 24-105mm F4 G OSS', exif: 'FE 24-105mm F4 G OSS' },
  { name: 'FE 70-300mm F4.5-5.6 G OSS', exif: 'FE 70-300mm F4.5-5.6 G OSS' },
  { name: 'FE 24mm F2.8 G', exif: 'FE 24mm F2.8 G' },
  { name: 'FE 40mm F2.5 G', exif: 'FE 40mm F2.5 G' },
  { name: 'Sonnar T* FE 55mm F1.8 ZA', exif: 'FE 55mm F1.8 ZA' },
  { name: 'FE 90mm F2.8 Macro G OSS', exif: 'FE 90mm F2.8 Macro G OSS' },
  { name: 'CONTAX Planar T* 50mm F1.4 AE', exif: 'CONTAX Planar T* 50mm F1.4 AE' },
  { name: 'LUMIX G Vario 12-32mm F3.5-5.6 Asph. Mega O.I.S.', exif: 'LUMIX G VARIO 12-32/F3.5-5.6' },
  { name: 'LUMIX G 25mm F1.7 Asph.', exif: 'LUMIX G 25/F1.7' },
  { name: 'M.ZUIKO DIGITAL ED 14-42mm F3.5-5.6 EZ', exif: 'OLYMPUS M.14-42mm F3.5-5.6 EZ' },
  { name: 'M.ZUIKO DIGITAL ED 40-150mm F4-5.6 R', exif: 'OLYMPUS M.40-150mm F4.0-5.6 R' },
  { name: 'AF-P DX NIKKOR 18-55mm F3.5-5.6 G VR', exif: '18.0-55.0 mm f/3.5-5.6' },
  { name: 'AF-P DX NIKKOR 70-300mm F4.5-6.3 G ED VR', exif: '70.0-300.0 mm f/4.5-6.3' },
  { name: 'AF-S DX NIKKOR 35mm F1.8 G', exif: '35.0 mm f/1.8' },
  { name: 'iPhone 12', exif: 'foodie' },
  { name: 'iPhone 12', exif: 'iPhone 12' },
  { name: 'iPhone 15 Pro', exif: 'iPhone 15 Pro' },
  { name: 'Utulens 32mm F16', exif: 'Utulens 32mm F16' }
]


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
      .replace('.webp', '.json')
  }

  get url(): string { return this._url }
  get thumbnailUrl(): string { return this._thumbnailUrl }
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

  get model(): string | null { return this._model }
  get lens(): string | null { return this._lens }
}

class Photo {
  private _slug: string
  private _url: PhotoUrl
  private _exif: Exif

  constructor(url: PhotoUrl, exif: Exif) {
    this._slug = url.url
    this._url = url
    this._exif = exif
  }

  get slug(): string { return this._slug }
  get url(): PhotoUrl { return this._url }
  get exif(): Exif { return this._exif }

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

export class PhotoCollection extends Collection<Photo, PhotoCollection> {
  protected create(items: Photo[]): PhotoCollection {
    return new PhotoCollection(items)
  }

  static async fetchByUrls(urls: PhotoUrl[]): Promise<PhotoCollection> {
    const photos = await Promise.all(
      urls.map(async url => await Photo.fetchByUrl(url))
    )
    return new PhotoCollection(photos.filter(photo => photo !== null) as Photo[])
  }

  thumbnailUrls(): string[] {
    return this._items.map(photo => photo.url.thumbnailUrl)
  }

  uniqueCameras(): string[] {
    const models = Array.from(new Set(this._items.map(photo => {
      const c = CAMERA_MASTER.find(c => photo.exif.model === c.exif)
      return c ? c.name : null
    })))
    const lenses = Array.from(new Set(this._items.map(photo => {
      const c = CAMERA_MASTER.find(c => photo.exif.lens === c.exif)
      return c ? c.name : null
    })))
    return models.concat(lenses).filter(v => v !== null) as string[]
  }
}
