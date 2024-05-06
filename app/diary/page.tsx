import Link from 'next/link'
import { DIARY_PER_PAGE } from '@/config'
import { DiaryCollection } from '@/core/diary/model'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'
import { Paginator } from '@/core/diary/pagination'
import Pagination from '@/components/diary/pagination'
import { EN_TITLE_FONT } from '@/config'

const Page = async () => {
  const diariesAll = await getDiaries('data/diary')
  const n = diariesAll.items.length
  const paginator = new Paginator(n, DIARY_PER_PAGE)
  const page = 1
  const diaries = new DiaryCollection(diariesAll.sorted.slice(paginator.minIndex(page), paginator.maxIndex(page)))

  const months = aggByMonth(diariesAll.items)
  const cameras = await aggCameras(diariesAll.items)

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>APKAS</Link></p>
        </div>
        <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>DIARY</h1>
      </section>

      <div className="md:flex py-4">
        <div className="md:w-[70%]">
          <section>
            {diaries.sorted.map(diary => (
              <Card key={diary.slug} diary={diary} />
            ))}
          </section>

          <section className="py-4 text-center text-sm text-gray-500">
            <Pagination paginator={paginator} page={page} />
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
