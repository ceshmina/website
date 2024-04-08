import Link from 'next/link'
import { getDiaries, getDiaryBySlug } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.items.map(diary => ({ slug: diary.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const diaryItem = await getDiaryBySlug('data/diary', slug)
  if (diaryItem) {
    const { diary, prev, next } = diaryItem
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

        <section className="py-4 flex justify-between">
          <div className="py-2 pr-2 text-sm">
            {next ? <>
              <p>次の日記</p>
              <p><Link href={`/diary/${next.slug}`} className="text-blue-500">&lt; {next.showTitle}</Link></p>
            </> : null}
          </div>
          <div className="py-2 pl-2 text-sm text-right">
            {prev ? <>
              <p>前の日記</p>
              <p><Link href={`/diary/${prev.slug}`} className="text-blue-500">{prev.showTitle} &gt;</Link></p>
            </> : null}
          </div>
        </section>
      </main>
    )
  } else {
    console.log('hoge')
    return null
  }
}

export default Page
