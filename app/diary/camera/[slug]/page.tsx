import Link from 'next/link'
import { Camera } from '@/core/diary/model'
import { aggCameras } from '@/core/diary/aggregate'
import { getDiaries, getDiariesByCamera } from '@/core/diary/retrieve'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  const cameras = await aggCameras(diaries.items)
  return cameras.map(({ camera }) => ({ slug: camera.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const camera = Camera.bySlug(slug)
  if (!camera) return null

  const diariesAll = await getDiaries('data/diary')
  const diaries = await getDiariesByCamera(diariesAll.items, slug)
  const n = diaries.items.length

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">撮影機材: {camera.name} の日記一覧 ({n}件)</h1>
      </section>

      <section className="py-4">
        {diaries.sorted.map(diary => (
          <div key={diary.slug} className="py-4">
            <h2 className="font-bold text-blue-500">
              <Link href={`/diary/${diary.slug}`}>{diary.showTitle}</Link>
            </h2>
            <div className="py-2 text-xs font-light text-gray-800">
              <p className="line-clamp-3">{diary.contentNoImgs()}</p>
            </div>
            <div>
              {diary.thumbnailUrls().map((url, i) => (
                <img key={i} src={url} className="w-[72px] h-[48px] object-cover inline-block mr-2" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
