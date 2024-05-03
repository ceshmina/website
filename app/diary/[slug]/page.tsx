import Link from 'next/link'
import { aggByMonth, aggCameras } from '@/core/diary/aggregate'
import { getDiaries, getDiaryBySlug, getCameras } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'
import Sidebar from '@/components/diary/sidebar'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.items.map(diary => ({ slug: diary.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const diaryItem = await getDiaryBySlug('data/diary', slug)
  if (diaryItem) {
    const { diary, prev, next } = diaryItem
    const cameras = await getCameras(diary)

    const diariesAll = await getDiaries('data/diary')
    const months = aggByMonth(diariesAll.items)
    const camerasAll = await aggCameras(diariesAll.items)

    return (
      <main className="max-w-[800px] mx-auto p-4">
        <section className="py-4">
          <div className="py-2 text-sm">
            <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
          </div>
          <h1 className="text-2xl font-bold">{diary.showTitle}</h1>
        </section>

        <div className="md:flex py-4">
          <div className="md:w-[70%]">
            <section>
              <div className="py-[13px] text-sm">
                <Article content={diary.content} />
              </div>
            </section>

            {cameras.length > 0 ? (
              <p className="my-3 text-xs text-gray-500">
                この記事の撮影機材: {cameras.map(camera =>
                  <span key={camera.slug} className="inline-block mr-2 my-1 border-2 border-gray-300 px-1 py-0.5 rounded">
                    <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name}</Link>
                  </span>
                )}
              </p>
            ) : null}

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
