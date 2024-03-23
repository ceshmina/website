import fs from 'fs'
import path from 'path'
import { format, parse } from 'date-fns'
import Markdown from 'react-markdown'
import type { GetDiaries, GetFilesByExtension } from '@/type/diary'

const getFilesByExtension: GetFilesByExtension = (dir, ext) => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  const files = dirents.flatMap(dirent => {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      return getFilesByExtension(res, ext)
    } else if (path.extname(res) === `.${ext}`) {
      return res
    } else {
      return []
    }
  })
  return files
}

const getDiaries: GetDiaries = () => {
  const diaryDir = path.join(process.cwd(), 'data/diary')
  const files = getFilesByExtension(diaryDir, 'md')
  const diaries = files.map(file => {
    const slug = path.basename(file).replace(/\.md$/, '')
    const date = parse(slug, 'yyyyMMdd', new Date())
    const content = fs.readFileSync(file, 'utf8')
    return {
      slug,
      date,
      content
    }
  })
  return diaries
}

const Page = () => {
  const diaries = getDiaries()
  const sortedDiaries = diaries.sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="my-8">
        <h1 className="text-2xl font-bold">Diary</h1>
      </section>

      <section className="my-8">
        {sortedDiaries.map(diary => (
          <article key={diary.slug} className="my-8">
            <h2 className="font-bold my-2">{format(diary.date, 'yyyy年M月d日')}</h2>
            <Markdown components={{
              p: ({ children }) => <p className="text-sm my-1">{children}</p>,
              hr: () => <hr className="w-[50%] max-w-[300px] mx-auto my-6 border-2 rounded-full border-gray-200" />
            }}>
              {diary.content}
            </Markdown>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Page
