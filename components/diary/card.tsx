import Link from 'next/link'
import { AltFont } from '@/components/styled'
import { Diary as OldDiary } from '@/core/diary/model'
import { getThumbnailUrlsBySlug } from '@/core/diary/retrieve'
import { Diary } from '@/core/model/diary'


const Card = async (props: { diary: Diary | OldDiary, showContent?: boolean, cameraSlug?: string }) => {
  const { diary, showContent, cameraSlug } = props
  const thumbnailUrls = diary instanceof Diary ?
    diary.photos.thumbnailUrls() :
    cameraSlug ? await getThumbnailUrlsBySlug(diary, cameraSlug) : diary.imageThumbnailUrls()

  return (
    <div className="py-4 group">
      <Link href={`/diary/entry/${diary.slug}`}>
        <div className="flex align-bottom border-b-2 border-gray-700 group-hover:border-gray-500 transition">
          <p className={`
            w-[130px] min-w-[130px] text-sm text-center font-bold px-4 py-1 mb-[-2px]
            border-2 border-gray-700 group-hover:border-gray-500
            text-gray-100 bg-gray-700 group-hover:bg-gray-500 transition
          `}>
            <AltFont>{diary.showDate()}</AltFont>
          </p>
          <p className="w-[100%] pl-2 pt-1 text-gray-800 font-medium group-hover:bg-gray-200 rounded-tr-[8px] transition">{diary.title || ''}</p>
        </div>
        <div className="pt-2 group-hover:bg-gray-200 rounded-b-[8px] transition">
          {showContent ? (
            <div className="pb-2 text-xs font-light text-gray-800">
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
      </Link>
    </div>
  )
}

export default Card
