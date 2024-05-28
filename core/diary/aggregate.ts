import { Diary, Month, Camera } from '@/core/diary/model'
import { getCameras } from '@/core/diary/retrieve'

export const aggByMonth = (diaries: Diary[]) => {
  const counts: Map<string, number> = new Map()
  diaries.forEach(diary => {
    const month = diary.month
    const count = counts.get(month) || 0
    counts.set(month, count + 1)
  })
  return Array.from(counts.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([month, count]) => ({ month: Month.bySlug(month), count }))
}

export const aggCameras = async (diaries: Diary[]) => {
  const cameras = await Promise.all(diaries.map(async diary => await getCameras(diary)))
  // exifの表記揺れを吸収するため、slugが同じなら同じとみなす
  const slugs = cameras.map(cs => [...new Set(cs.map(c => c.slug))])
  const counts: Map<string, number> = new Map()
  slugs.flat().forEach(slug => {
    const count = counts.get(slug) || 0
    counts.set(slug, count + 1)
  })
  const res = Array.from(counts.entries())
    .map(([slug, count]) => ({ camera: Camera.bySlug(slug), count }))
    .filter(({ camera }) => camera !== null) as { camera: Camera, count: number }[]
  return res.sort((a, b) => (
    a.camera.type.localeCompare(b.camera.type) || a.camera.slug.localeCompare(b.camera.slug)
  ))
}
