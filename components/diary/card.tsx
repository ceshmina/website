import Link from 'next/link'
import { Diary } from '@/core/diary/model'
import { getThumbnailUrlsBySlug } from '@/core/diary/retrieve'

const Card = async (props: { diary: Diary, showContent?: boolean, cameraSlug?: string }) => {
  const { diary, showContent, cameraSlug } = props
  const thumbnailUrls = cameraSlug ? await getThumbnailUrlsBySlug(diary, cameraSlug) : diary.thumbnailUrls()
  return (
    <div className="py-4">
      <h2 className="font-medium text-blue-500">
        <Link href={`/diary/entry/${diary.slug}`}>{diary.showTitle()}</Link>
      </h2>
      {showContent ? (
        <div className="py-2 text-xs font-light text-gray-800">
          <p className="line-clamp-3">{diary.contentTextOnly()}</p>
        </div>
      ) : <div className="py-2" />}
      <div>
        {thumbnailUrls.map((url, i) => {
          if (i % 5 === 0) {
            return <img key={i} src={url} className="w-[18%] mb-[2%] object-cover inline-block" />
          } else {
            return <img key={i} src={url} className="w-[18%] mb-[2%] ml-[2%] object-cover inline-block" />
          }})}
      </div>
    </div>
  )
}

export default Card
