import { cache } from 'react'
import { promises as fs } from 'fs'

import {
  Diary, DiaryCollection,
  ImageUrl, Camera, Exif, Location, Photo
} from '@/core/diary/model'
import { DIARY_DIR } from '@/core/const'
import { headers } from 'next/headers'


export const getDiaries = cache(async () => {
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
  return new DiaryCollection(await _getDiaries(DIARY_DIR))
})

export const getDiaryBySlug = cache(async (slug: string) => {
  const diaries = await getDiaries()
  return diaries.findBySlug(slug)
})

export const getDiariesByMonth = cache(async (month: string) => {
  const diaries = await getDiaries()
  return diaries.filterByMonth(month)
})


export const getExifByImageUrl = cache(async (url: ImageUrl) => {
  const res = await fetch(url.exifUrl, { headers: { connection: 'close' } })
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
  const exifs = await Promise.all(diary.imageUrls.map(async url => await getExifByImageUrl(url)))
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

export const getCamerasByImageUrl = cache(async (url: ImageUrl) => {
  const exif = await getExifByImageUrl(url)
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

export const getMetaDataByImageUrl = cache(async (url: ImageUrl) => {
  const exif = await getExifByImageUrl(url)
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
  const thumbnailUrls = diary.imageThumbnailUrls()
  const exifs = await Promise.all(diary.imageUrls.map(async url => await getExifByImageUrl(url)))
  const res: string[] = []
  for (let i = 0; i < exifs.length; i++) {
    const model = exifs[i].model
    if (model) {
      const camera = Camera.byExif(model)
      if (camera && camera.slug === slug) {
        res.push(thumbnailUrls[i])
      }
    }
    const lens = exifs[i].lens
    if (lens) {
      const camera = Camera.byExif(lens)
      if (camera && camera.slug === slug) {
        res.push(thumbnailUrls[i])
      }
    }
  }
  return res
})

export const getDiariesByLocation = cache(async (diaries: Diary[], slug: string) => {
  const locName = Location.bySlug(slug).name
  return new DiaryCollection(diaries.filter(diary => diary.location === locName))
})

export const getAllImages = cache(async (diaries: Diary[]) => {
  return diaries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .flatMap(diary => diary.imageUrls.reverse().map(url => new Photo(
        url.url,
        url.thumbnailUrl,
        diary.slug,
        `/diary/entry/${diary.slug}`,
        diary.showTitle()
      )
    ))
})

export const getDiaryWithSameMD = cache(async (diaries: Diary[], diary: Diary) => {
  const res = diaries.filter(d => 
    d.date.getFullYear() < diary.date.getFullYear()
    && d.date.getMonth() === diary.date.getMonth()
    && d.date.getDate() === diary.date.getDate()
  )
  return res.sort((a, b) => b.date.getTime() - a.date.getTime())
})
