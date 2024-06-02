import Link from 'next/link'
import { Location } from '@/core/diary/model'
import { aggByLocation } from '@/core/diary/aggregate'
import { getDiaries, getDiariesByLocation } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'
import Sidebar from '@/components/diary/sidebar'
import { EN_TITLE_FONT } from '@/config'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const locations = aggByLocation(diaries.items)
  return locations.map(({ location }) => ({ slug: location }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const location = Location.bySlug(slug)

  const diariesAll = await getDiaries('data/diary')
  const diaries = await getDiariesByLocation(diariesAll.items, slug)
  const n = diaries.items.length

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p>
            <Link href="/" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>
              APKAS
            </Link> / <Link href="/diary" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>
              DIARY
            </Link>
          </p>
        </div>
        <h1 className="text-2xl font-medium">場所: {location.name} の日記一覧 ({n}件)</h1>
      </section>

      <div className="md:flex py-4">
        <section className="md:w-[70%]">
          {diaries.sorted.map(diary => (
            <Card key={diary.slug} diary={diary} showContent={true} />
          ))}
        </section>

        <div className="md:w-[30%] md:pl-4 py-4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Page
