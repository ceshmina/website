import Link from 'next/link'
import { EN_TITLE_FONT } from '@/config'
import ImageThumbnail from '@/components/diary/imagethumbnail'

import { getAllImages } from '@/core/logic/diary'

const Page = async () => {
  const images = await getAllImages()

  return (<div>
    <section className="py-4">
      <div className="py-2 text-sm">
        <Link href="/" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>
          APKAS
        </Link> / <Link href="/diary" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>
          DIARY
        </Link>
      </div>
      <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>PHOTOS</h1>
    </section>

    <div className="py-8">
      {images.map((p, i) => {
        const { url, diary } = p
        const showDate = i === 0 || diary.date !== images[i - 1].diary.date
        let className = 'w-[18%] object-cover inline-block'
        if (i % 5 !== 0) {
          className += ' ml-[2%]'
        }
        if (showDate) {
          return <div key={i} className={className}>
            <p className="text-[10px] md:text-xs text-gray-500">{diary.slug}</p>
            <ImageThumbnail
              src={url.thumbnailUrl} largeSrc={url.url}
              diaryLink={`/diary/entry/${diary.slug}`} diaryTitle={diary.showTitle()}
            />
          </div>
        } else {
          return <div key={i} className={className}>
            <p className="text-[10px] md:text-xs text-gray-500">&nbsp;</p>
            <ImageThumbnail
              src={url.thumbnailUrl} largeSrc={url.url}
              diaryLink={`/diary/entry/${diary.slug}`} diaryTitle={diary.showTitle()}
            />
          </div>
        }
      })}
    </div>
  </div>)
}

export default Page
