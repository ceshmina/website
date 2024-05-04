import Link from 'next/link'
import { Month } from '@/core/diary/model'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries, getDiariesByMonth } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const months = aggByMonth(diaries.items)
  return months.map(({ month }) => ({ slug: month.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const month = Month.bySlug(slug)

  const diariesAll = await getDiaries('data/diary')
  const diaries = await getDiariesByMonth(diariesAll.items, slug)
  const n = diaries.items.length

  const months = aggByMonth(diariesAll.items)
  const cameras = await aggCameras(diariesAll.items)

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">{month.name} の日記一覧 ({n}件)</h1>
      </section>

      <div className="md:flex py-4">
        <section className="md:w-[70%]">
          {diaries.sorted.map(diary => (
            <Card key={diary.slug} diary={diary} />
          ))}
        </section>

        <div className="md:w-[30%] md:pl-4 py-4">
          <Sidebar months={months} cameras={cameras} />
        </div>
      </div>
    </main>
  )
}

export default Page