import { cache } from 'react'
import { promises as fs } from 'fs'
import { Diary, DiaryCollection, Camera, Exif, Location, Photo } from '@/core/diary/model'
import { format } from 'date-fns'

export const getDiaries = cache(async (dir: string) => {
  const _getDiaries = async (dir: string) => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const res: Diary[] = []
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const res2 = await _getDiaries(`${dir}/${entry.name}`)
        res.push(...res2)
      } else if (entry.name.endsWith('.md')) {
        const mdContent = await fs.readFile(`${dir}/${entry.name}`, 'utf-8')
        res.push(new Diary(entry.name.replace(/\.md$/, ''), mdContent))
      }
    }
    return res
  }
  return new DiaryCollection(await _getDiaries(dir))
})

export const getDiaryBySlug = cache(async (dir: string, slug: string) => {
  const diaries = await getDiaries(dir)
  return diaries.findBySlug(slug)
})

export const getDiariesByMonth = cache(async (diaries: Diary[], slug: string) => {
  return new DiaryCollection(diaries.filter(diary => diary.month === slug))
})

export const getExifByImgUrl = cache(async (url: string) => {
  const exifUrl = url.split(' ')[0].replace('medium', 'exif').replace('.jpg', '.json')
  const res = await fetch(exifUrl)
  const json = await res.json()
  return new Exif(
    json.Model || null,
    json.LensModel || null,
    json.FocalLength || null,
    json.FocalLengthIn35mmFilm || null,
    json.FNumber || null,
    json.ExposureTime || null,
    json.ISOSpeedRatings || null
  )
})

export const getCameras = cache(async (diary: Diary) => {
  const exifs = await Promise.all(diary.imgUrls().map(async url => await getExifByImgUrl(url)))
  const models = [...new Set(
    exifs.map(exif => exif.model).filter((model): model is string => model !== null)
  )]
  const lenses = [...new Set(
    exifs.map(exif => exif.lens).filter((lens): lens is string => lens !== null)
  )]
  return models.map(model => Camera.byExif(model))
    .concat(lenses.map(lens => Camera.byExif(lens)))
    .filter((camera): camera is Camera => camera !== null)
})

export const getCamerasByImgUrl = cache(async (url: string) => {
  const exif = await getExifByImgUrl(url)
  const res: Camera[] = []
  if (exif.model) {
    const model = Camera.byExif(exif.model)
    if (model) res.push(model)
  }
  if (exif.lens) {
    const lens = Camera.byExif(exif.lens)
    if (lens) res.push(lens)
  }
  return res
})

export const getMetaDataByImgUrl = cache(async (url: string) => {
  const exif = await getExifByImgUrl(url)
  return {
    focalLength: exif.focalLength,
    focalLength35: exif.focalLength35,
    fNumber: exif.fNumber,
    exposureTime: exif.exposureTime,
    isoSpeedRatings: exif.isoSpeedRatings
  }
})

export const getDiariesByCamera = cache(async (diaries: Diary[], slug: string) => {
  const res: Diary[] = []
  for (const diary of diaries) {
    const cameras = await getCameras(diary)
    if (cameras.map(camera => camera.slug).includes(slug)) {
      res.push(diary)
    }
  }
  return new DiaryCollection(res)
})

export const getThumbnailUrlsBySlug = cache(async (diary: Diary, slug: string) => {
  const imgUrls = diary.imgUrls()
  const exifs = await Promise.all(imgUrls.map(async url => await getExifByImgUrl(url)))
  const res: string[] = []
  for (let i = 0; i < imgUrls.length; i++) {
    const model = exifs[i].model
    if (model) {
      const camera = Camera.byExif(model)
      if (camera && camera.slug === slug) {
        res.push(imgUrls[i])
      }
    }
    const lens = exifs[i].lens
    if (lens) {
      const camera = Camera.byExif(lens)
      if (camera && camera.slug === slug) {
        res.push(imgUrls[i])
      }
    }
  }
  return res.map(url => url.replace('medium', 'thumbnail'))
})

export const getDiariesByLocation = cache(async (diaries: Diary[], slug: string) => {
  const locName = Location.bySlug(slug).name
  return new DiaryCollection(diaries.filter(diary => diary.location === locName))
})

export const getAllImages = cache(async (diaries: Diary[]) => {
  return diaries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .flatMap(diary => diary.imgUrls().reverse().map(url => new Photo(
      url,
      url.replace('medium', 'thumbnail'),
      format(diary.date, 'yyyyMMdd')
    )))
})
