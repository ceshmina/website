import { cache } from 'react'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

const DIARY_DIR = 'data/diary'

export const fetchDiaries = cache(async () => {
  const _search = async (dir: string): Promise<string[]> => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const diaries: string[] = []
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const res = await _search(`${dir}/${entry.name}`)
        diaries.push(...res)
      } else if (entry.name.endsWith('.md')) {
        diaries.push(`${dir}/${entry.name}`)
      }
    }
    return diaries
  }
  const paths = await _search(DIARY_DIR)
  return await Promise.all(paths.map(async path => {
    const slug = path.split('/').pop()!.replace('.md', '')
    const markdown = await fs.readFile(path, 'utf-8')
    const { data, content } = matter(markdown)
    return {
      slug,
      content,
      title: data.title || null,
      location: data.location || null
    }
  }))
})

export const fetchDiaryBySlug = cache(async (slug: string) => {
  const _search = async (dir: string, slug: string): Promise<string | null> => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const res = await _search(`${dir}/${entry.name}`, slug)
        if (res) return res
      } else if (entry.name === `${slug}.md`) {
        return `${dir}/${entry.name}`
      }
    }
    return null
  }
  const path = await _search(DIARY_DIR, slug)
  if (!path) return null
  
  const markdown = await fs.readFile(path, 'utf-8')
  const { data, content } = matter(markdown)
  return {
    slug,
    content,
    title: data.title || null,
    location: data.location || null
  }
})
