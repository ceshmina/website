import { promises as fs } from 'fs'
import matter from 'gray-matter'

const DIARY_DIR = 'data/diary'

export const getDiaryBySlug = async (slug: string) => {
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
}
