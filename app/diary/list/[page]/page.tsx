import Link from 'next/link'
import { DIARY_PER_PAGE } from '@/config'
import Card from '@/components/diary/card'
import Pagination from '@/components/diary/pagination'
import Sidebar from '@/components/diary/sidebar'
import { EN_TITLE_FONT } from '@/config'

import { Paginator } from '@/core/model/base'
import { DiaryCollection } from '@/core/model/diary'

export const generateStaticParams = async () => {
  const diaries = await DiaryCollection.fetch()
  const paginator = new Paginator(diaries, DIARY_PER_PAGE)
  return Array.from({ length: paginator.numPages() }, (_, i) => ({ page: (i + 1).toString() }))
}

const Page = async ({ params }: { params: { page: string }}) => {
  const diaries = (await DiaryCollection.fetch()).sort()
  const paginator = new Paginator(diaries, DIARY_PER_PAGE)

  const slice = paginator.sliceByPage(parseInt(params.page))

  return (
    <main className="max-w-[800px] mx-auto p-4 md:px-0">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>APKAS</Link></p>
        </div>
        <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>DIARY</h1>
      </section>

      <div className="md:flex py-4">
        <div className="md:w-[70%]">
          <section>
            {slice.sort().map(diary => (
              <Card key={diary.slug} diary={diary} showContent={true} />
            ))}
          </section>

          <section className="py-4 text-center text-sm text-gray-500">
            <Pagination paginator={paginator} page={parseInt(params.page)} />
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
