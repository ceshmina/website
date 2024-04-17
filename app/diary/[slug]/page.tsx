import Link from 'next/link'
import { Camera } from '@/core/diary/model'
import { getDiaries, getDiaryBySlug, getExifByImgUrl } from '@/core/diary/retrieve'
import Article from '@/components/diary/article'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.items.map(diary => ({ slug: diary.slug }))
}

const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const diaryItem = await getDiaryBySlug('data/diary', slug)
  if (diaryItem) {
    const { diary, prev, next } = diaryItem
    const exifs = await Promise.all(diary.imgUrls().map(async url => await getExifByImgUrl(url)))
    const models = [...new Set(
      exifs.map(exif => exif.model).filter((model): model is string => model !== null)
    )]
    const lenses = [...new Set(
      exifs.map(exif => exif.lens).filter((lens): lens is string => lens !== null)
    )]
    const cameras = models.map(model => Camera.byExif(model))
      .concat(lenses.map(lens => Camera.byExif(lens)))
      .filter((camera): camera is Camera => camera !== null)

    return (
      <main className="max-w-[800px] mx-auto p-4">
        <section className="py-4">
          <div className="py-2 text-sm">
            <p><Link href="/diary" className="text-blue-500">戻る</Link></p>
          </div>
          <h1 className="text-2xl font-bold">{diary.showTitle}</h1>
          <p className="my-3 text-xs text-gray-500">
            {cameras.map(camera =>
              <span key={camera.slug} className="inline-block mr-2 my-1 border-2 border-gray-300 px-1 py-0.5 rounded">{camera.name}</span>
            )}
          </p>
        </section>

        <section className="py-4">
          <div key={diary.slug} className="py-2">
            <div className="py-2 text-sm">
              <Article content={diary.content} />
            </div>
          </div>
        </section>

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
      </main>
    )
  } else {
    console.log('hoge')
    return null
  }
}

export default Page
