import Link from 'next/link'
import { getDiaries } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'

const Page = async () => {
  const diaries = await getDiaries('data/diary')

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">diary</h1>
      </section>

      <section className="py-4">
        {diaries.sorted.map(diary => (
          <div key={diary.slug} className="py-2">
            <h2 className="font-bold text-blue-500">
              <Link href={`/diary/${diary.slug}`}>{diary.showTitle}</Link>
            </h2>
            <div className="py-2 text-xs font-light text-gray-800">
              <p className="line-clamp-3">{diary.contentNoImgs()}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
