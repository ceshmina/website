import Link from 'next/link'
import { getDiaries, getDiaryBySlug } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.map(diary => ({ slug: diary.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const diary = await getDiaryBySlug('data/diary', slug)
  if (diary) {
    return (
      <main className="max-w-[800px] mx-auto p-4">
        <section className="py-4">
          <div className="py-2 text-sm">
            <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
          </div>
          <h1 className="text-2xl font-bold">{diary.showTitle}</h1>
        </section>

        <section className="py-4">
          <div key={diary.slug} className="py-2">
            <div className="py-2 text-sm">
              <Article content={diary.content} />
            </div>
          </div>
        </section>
      </main>
    )
  } else {
    return null
  }
}

export default Page
