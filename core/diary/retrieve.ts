import { cache } from 'react'
import { promises as fs } from 'fs'
import { Diary } from '@/core/diary/model'

export const getDiaries = cache(async (dir: string) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const res: Diary[] = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const res2 = await getDiaries(`${dir}/${entry.name}`)
      res.push(...res2)
    } else if (entry.name.endsWith('.md')) {
      const mdContent = await fs.readFile(`${dir}/${entry.name}`, 'utf-8')
      res.push(new Diary(entry.name.replace(/\.md$/, ''), mdContent))
    }
  }
  return res
})

export const getDiaryBySlug = async (dir: string, slug: string) => {
  const diaries = await getDiaries(dir)
  return diaries.find(diary => diary.slug === slug) || null
}
