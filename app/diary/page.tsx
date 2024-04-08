import Link from 'next/link'
import Markdown from 'react-markdown'
import { getDiaries } from '@/core/diary/retrieve'

const Page = async () => {
  const diaries = await getDiaries('data/diary')
  const sortedDiaries = diaries.sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">diary</h1>
      </section>

      <section className="py-4">
        {sortedDiaries.map(diary => (
          <div key={diary.slug} className="py-2">
            <h2 className="text-lg font-bold">{diary.showTitle}</h2>
            <div className="py-2 text-sm">
              <Markdown components={{
                p: ({ children }) => <p className="py-1">{children}</p>,
                img: ({ src }) => <img src={src} className="py-1" />,
              }} >{diary.content}</Markdown>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
