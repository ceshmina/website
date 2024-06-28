import { cache } from 'react'
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
