import { cache } from 'react'
import { Month } from '@/core/model/datetime'
import { Diary, DiaryCollection } from '@/core/model/diary'

export const getDiaryBySlugWithNext = cache(async (slug: string) => {
  const diary = await Diary.fetchBySlug(slug)
  if (!diary) return null

  const diaries = (await DiaryCollection.fetch()).sort()
  const index = diaries.getIndexBySlug(slug)
  const next = index > 0 ? diaries.getItemByIndex(index - 1) : null
  const prev = index < diaries.length - 1 ? diaries.getItemByIndex(index + 1) : null
  return { diary, prev, next }
})

export const getDiariesWithSameDate = cache(async (slug: string) => {
  const diary = await Diary.fetchBySlug(slug)
  if (!diary) return new DiaryCollection([])

  const diaries = (await DiaryCollection.fetch()).sort() as DiaryCollection
  const res = diaries.filterByDate(diary.date)
  return res
})

export const getDiariesByMonth = cache(async (month: Month) => {
  const diaries = (await DiaryCollection.fetch())
  const res = diaries.filterByMonth(month).sort()
  return res
})

export const getDiariesByCamera = cache(async (camera: string) => {
  const diaries = (await DiaryCollection.fetch())
  const res = diaries.filterByCamera(camera).sort()
  return res
})

export const getDiariesByLocation = cache(async (location: string) => {
  const diaries = (await DiaryCollection.fetch())
  const res = diaries.filterByLocation(location).sort()
  return res
})
