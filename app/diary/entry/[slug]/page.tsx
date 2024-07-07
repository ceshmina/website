import Link from 'next/link'
import { MapPinIcon, CameraIcon } from '@heroicons/react/24/solid'
import Article from '@/components/diary/article'
import Card from '@/components/diary/card'
import { EN_TITLE_FONT } from '@/config'

import { DiaryCollection } from '@/core/model/diary'
import { getDiaryBySlugWithNext, getDiariesWithSameDate } from '@/core/logic/diary'


export const generateStaticParams = async () => {
  const diaries = await DiaryCollection.fetch()
  return diaries.slugs().map(slug => ({ slug: slug }))
}


const Page = async ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  const result = await getDiaryBySlugWithNext(slug)
  if (!result) return null

  const { diary, prev, next } = result

  const location = diary.location
  const uniqueCameras = diary.photos.uniqueCameras()
  const pastDiaries = (await getDiariesWithSameDate(slug)).sort()

  const showImgMetaData = true  // slug >= '20240521'
  const useAltAsCaption = slug >= '20240624'

  return (<div>
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
      <h1 className="text-2xl font-medium">{diary.showTitle()}</h1>
    </section>

    <div>
      <section>
        <div className="py-[13px] text-sm">
          <Article content={diary.content} showImgMetaData={showImgMetaData} useAltAsCaption={useAltAsCaption} />
        </div>
      </section>

      <div className="py-4" />

      {location ? <p className="mt-3 mb-2 text-xs text-gray-500">
          <MapPinIcon className="w-4 h-4 inline-block pb-0.5 mr-1.5" />
          <Link href={`/diary/location/${location}`} className="text-blue-500">{location}</Link>
        </p> : null}
      {uniqueCameras.length > 0 ? (
        <p className="mt-2 mb-3 text-xs text-gray-500">
          <CameraIcon className="w-4 h-4 inline-block pb-0.5 mr-0.5" /> {uniqueCameras.map(camera =>
            <span key={camera} className="inline-block mr-2 my-1 border-[1px] border-gray-300 px-1 py-0.5 rounded">
              <Link href={`/diary/camera/${camera}`} className="text-blue-500">{camera}</Link>
            </span>
          )}
        </p>
      ) : null}

      <section className="pt-8">
        <div className="py-2 text-sm">
          {next ? <>
            <h2 className="font-medium">次の日記</h2>
            <Card diary={next} showContent={true} />
          </> : null}
        </div>
        <div className="py-2 text-sm">
          {prev ? <>
            <h2 className="font-medium">前の日記</h2>
            <Card diary={prev} showContent={true} />
          </> : null}
        </div>
      </section>

      {pastDiaries.length > 0 && <section className="py-4">
          <h2 className="mt-4 text-sm font-medium">同じ日付の記事</h2>
          {pastDiaries.map(diary => <Card key={diary.slug} diary={diary} showContent={true} />)}
      </section>}
      
      <div className="py-4" /> 
    </div>
  </div>)
}

export default Page
