import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { DiaryCollection } from '@/core/diary/model'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'

const perPage = 25

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const numPages = Math.ceil(diaries.items.length / perPage)
  return Array.from({ length: numPages }, (_, i) => ({ page: (i + 1).toString() }))
}

const Page = async ({ params }: { params: { page: string }}) => {
  const { page } = params

  const diariesAll = await getDiaries('data/diary')
  const n = diariesAll.items.length
  const numPages = Math.ceil(n / perPage)
  const minIndex = (parseInt(page) - 1) * perPage
  const maxIndex = Math.min(n, parseInt(page) * perPage)
  const diaries = new DiaryCollection(diariesAll.sorted.slice(minIndex, maxIndex))

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
        <div className="md:w-[70%]">
          <section>
            {diaries.sorted.map(diary => (
              <Card key={diary.slug} diary={diary} />
            ))}
          </section>

          <section className="py-4 text-center text-sm text-gray-500">
            <p className="py-1">
              {minIndex + 1} - {maxIndex} / {n}件
            </p>
            <p className="py-1">
              {parseInt(page) > 1
                ? <span className="mr-2 border-2 border-gray-300 px-1 py-1 rounded-full">
                    <Link href={`/diary/list/${parseInt(page) - 1}`} className="text-blue-500"><ChevronLeftIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
                  </span>
                : <span className="mr-2 border-2 border-gray-200 px-1 py-1 rounded-full text-gray-300">
                    <ChevronLeftIcon className="w-4 h-4 inline-block pb-0.5" />
                  </span>}
              {` ${page} / ${numPages} `}
              {parseInt(page) < Math.ceil(n / perPage)
                ? <span className="ml-2 border-2 border-gray-300 px-1 py-1 rounded-full">
                    <Link href={`/diary/list/${parseInt(page) + 1}`} className="text-blue-500"><ChevronRightIcon className="w-4 h-4 inline-block pb-0.5" /></Link>
                  </span>
                : <span className="ml-2 border-2 border-gray-200 px-1 py-1 rounded-full text-gray-300">
                    <ChevronRightIcon className="w-4 h-4 inline-block pb-0.5" />
                  </span>}
            </p>
          </section>
        </div>

        <div className="md:w-[30%] md:pl-4 py-4">
          <Sidebar months={months} cameras={cameras} />
        </div>
      </div>
    </main>
  )
}

export default Page
