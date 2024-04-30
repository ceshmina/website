import Link from 'next/link'
import { aggCameras } from '@/core/diary/aggregate'
import { getDiaries } from '@/core/diary/retrieve'
import Card from '@/components/diary/card'

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
      </section>

      <div className="md:flex py-4">
        <section className="md:w-[70%]">
          {diaries.sorted.map(diary => (
            <Card key={diary.slug} diary={diary} />
          ))}
        </section>
        
        <div className="md:w-[30%] md:pl-4 py-4">
          <h2 className="text-sm font-bold">撮影機材別</h2>
          <p className="my-4 text-xs text-gray-500">
            {cameras.map(({ camera, count }) =>
              <span key={camera.slug} className="inline-block mr-2 my-1 border-2 border-gray-300 px-1 py-0.5 rounded">
                <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name} ({count})</Link>
              </span>
            )}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
