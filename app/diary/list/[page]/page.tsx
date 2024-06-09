import Link from 'next/link'
import { DIARY_PER_PAGE } from '@/config'
import { DiaryCollection } from '@/core/diary/model'
import { getDiaries } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'
import { Paginator } from '@/core/diary/pagination'
import Pagination from '@/components/diary/pagination'
import { EN_TITLE_FONT } from '@/config'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const paginator = new Paginator(diaries.items.length, DIARY_PER_PAGE)
  return Array.from({ length: paginator.numPages() }, (_, i) => ({ page: (i + 1).toString() }))
}

const Page = async ({ params }: { params: { page: string }}) => {
  const { page } = params
  const pageInt = parseInt(page)

  const diariesAll = await getDiaries('data/diary')
  const n = diariesAll.items.length
  const paginator = new Paginator(n, DIARY_PER_PAGE)
  const diaries = new DiaryCollection(diariesAll.sorted.slice(paginator.minIndex(pageInt), paginator.maxIndex(pageInt)))

  return (
    <main className="max-w-[960px] mx-auto p-4">
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
              <Card key={diary.slug} diary={diary} showContent={true} />
            ))}
          </section>

          <section className="py-4 text-center text-sm text-gray-500">
            <Pagination paginator={paginator} page={pageInt} />
          </section>
        </div>

        <div className="md:w-[30%] md:pl-4 py-4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Page
