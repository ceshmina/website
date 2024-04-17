import { Diary, Camera } from '@/core/diary/model'
import { getCameras } from '@/core/diary/retrieve'

export const aggCameras = async (diaries: Diary[]) => {
  const cameras = await Promise.all(diaries.map(async diary => await getCameras(diary)))
  const counts: Map<string, number> = new Map()
  cameras.flat().forEach(camera => {
    const count = counts.get(camera.slug) || 0
    counts.set(camera.slug, count + 1)
  })
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([slug, count]) => ({ camera: Camera.bySlug(slug), count }))
    .filter(({ camera }) => camera !== null) as { camera: Camera, count: number }[]
}
