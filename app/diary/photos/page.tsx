import Link from 'next/link'
import { getDiaries, getAllImages } from '@/core/diary/retrieve'
import { EN_TITLE_FONT } from '@/config'

const Page = async () => {
  const diaries = await getDiaries('data/diary')
  const photos = await getAllImages(diaries.items)

  return (
    <main className="max-w-[800px] mx-auto p-4">
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
        {photos.map((p, i) => {
          const thumbnailUrl = p.thumbnailUrl
          const showDate = i === 0 || p.date !== photos[i - 1].date
          let className = 'w-[18%] object-cover inline-block'
          if (i % 5 !== 0) {
            className += ' ml-[2%]'
          }
          if (showDate) {
            return <div key={i} className={className}>
              <p className="text-[10px] md:text-xs text-gray-500">{p.date}</p>
              <img src={thumbnailUrl} />
            </div>
          } else {
            return <div key={i} className={className}>
              <p className="text-[10px] md:text-xs text-gray-500">&nbsp;</p>
              <img src={thumbnailUrl} />
            </div>
          }
        })}
      </div>
    </main>
  )
}

export default Page
