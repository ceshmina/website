import Link from 'next/link'
import { MapPinIcon, CameraIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries, getDiaryBySlug, getCameras } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'
import Sidebar from '@/components/diary/sidebar'
import { EN_TITLE_FONT } from '@/config'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.items.map(diary => ({ slug: diary.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const diaryItem = await getDiaryBySlug('data/diary', slug)
  if (diaryItem) {
    const { diary, prev, next } = diaryItem
    const location = diary.location || 'Tokyo, Japan'
    const cameras = await getCameras(diary)

    const diariesAll = await getDiaries('data/diary')
    const months = aggByMonth(diariesAll.items)
    const camerasAll = await aggCameras(diariesAll.items)

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
          <h1 className="text-2xl font-medium">{diary.showTitle}</h1>
        </section>

        <div className="md:flex py-4">
          <div className="md:w-[70%]">
            <section>
              <div className="py-[13px] text-sm">
                <Article content={diary.content} />
              </div>
            </section>

            <div className="py-4" />

            {location ? <p className="mt-3 mb-2 text-xs text-gray-500">
                <MapPinIcon className="w-4 h-4 inline-block pb-0.5 mr-1.5" />
                {location}
              </p> : null}
            {cameras.length > 0 ? (
              <p className="mt-2 mb-3 text-xs text-gray-500">
                <CameraIcon className="w-4 h-4 inline-block pb-0.5 mr-0.5" /> {cameras.map(camera =>
                  <span key={camera.slug} className="inline-block mr-2 my-1 border-[1px] border-gray-300 px-1 py-0.5 rounded">
                    <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name}</Link>
                  </span>
                )}
              </p>
            ) : null}

            <section className="py-4 flex justify-between">
              <div className="py-2 pr-2 text-sm">
                {next ? <>
                  <p><ChevronLeftIcon className="w-3.5 h-3.5 inline-block ml-[-3px] pb-0.5" />次の日記</p>
                  <p><Link href={`/diary/entry/${next.slug}`} className="text-blue-500">{next.showTitle}</Link></p>
                </> : null}
              </div>
              <div className="py-2 pl-2 text-sm text-right">
                {prev ? <>
                  <p>前の日記<ChevronRightIcon className="w-3.5 h-3.5 inline-block mr-[-3px] pb-0.5" /></p>
                  <p><Link href={`/diary/entry/${prev.slug}`} className="text-blue-500">{prev.showTitle}</Link></p>
                </> : null}
              </div>
            </section>
          </div>

          <div className="md:w-[30%] md:pl-4 py-4">
            <Sidebar months={months} cameras={camerasAll} />
          </div>
        </div>
      </main>
    )
  } else {
    console.log('hoge')
    return null
  }
}

export default Page
