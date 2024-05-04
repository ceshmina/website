import Link from 'next/link'
import { DiaryCollection } from '@/core/diary/model'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'

const perPage = 25

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const numPages = Math.ceil(diaries.items.length / perPage)
  return Array.from({ length: numPages }, (_, i) => ({ params: { page: (i + 1).toString() } }))
}

const Page = async ({ params }: { params: { page: string }}) => {
  const { page } = params

  const diariesAll = await getDiaries('data/diary')
  const diaries = new DiaryCollection(diariesAll.sorted.slice((parseInt(page) - 1) * perPage, parseInt(page) * perPage))

  const months = aggByMonth(diariesAll.items)
  const cameras = await aggCameras(diariesAll.items)

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">diary</h1>
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
