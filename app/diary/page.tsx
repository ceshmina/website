import Link from 'next/link'
import { aggCameras } from '@/core/diary/aggregate'
import { getDiaries } from '@/core/diary/retrieve'

const Page = async () => {
  const diaries = await getDiaries('data/diary')
  const cameras = await aggCameras(diaries.items)

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">diary</h1>
        <p className="my-3 text-xs text-gray-500">
          {cameras.map(({ camera, count }) =>
            <span key={camera.slug} className="inline-block mr-2 my-1 border-2 border-gray-300 px-1 py-0.5 rounded">
              <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name} ({count})</Link>
            </span>
          )}
        </p>
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
                <img key={i} src={url} className="w-[72px] h-[48px] object-cover inline-block mr-2 mb-2" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page
