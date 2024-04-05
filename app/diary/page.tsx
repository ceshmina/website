import { promises as fs } from 'fs'
import { parse, format } from 'date-fns'

class Diary {
  slug: string
  date: Date
  content: string

  constructor(slug: string, content: string) {
    this.slug = slug
    this.date = parse(slug, 'yyyyMMdd', new Date())
    this.content = content
  }

  public get showDate(): string {
    return format(this.date, 'yyyy年M月d日')
  }
}

const getMarkdownFiles = async (dir: string) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const res: Diary[] = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const res2 = await getMarkdownFiles(`${dir}/${entry.name}`)
      res.push(...res2)
    } else if (entry.name.endsWith('.md')) {
      const content = await fs.readFile(`${dir}/${entry.name}`, 'utf-8')
      res.push(new Diary(entry.name.replace(/\.md$/, ''), content))
    }
  }
  return res
}

const Page = async () => {
  const diaries = await getMarkdownFiles('data/diary')
  const sortedDiaries = diaries.sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <h1 className="text-2xl font-bold">diary</h1>
      </section>

      <section className="py-4">
        {sortedDiaries.map(diary => (
          <div key={diary.slug} className="py-2">
            <h2 className="text-lg font-bold">{diary.showDate}</h2>
            <div className="py-2 text-sm">
              {diary.content}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
