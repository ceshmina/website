import Link from 'next/link'
import { Diary } from '@/core/diary/model'

const Card = (props: { diary: Diary }) => {
  const { diary } = props
  return (
    <div className="py-4">
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
  )
}

export default Card
