import Link from 'next/link'
import { getDiaries, getAllImages } from '@/core/diary/retrieve'
import { EN_TITLE_FONT } from '@/config'

const Page = async () => {
  const diaries = await getDiaries('data/diary')
  const imgUrls = await getAllImages(diaries.items)

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
        {imgUrls.map((url, i) => {
          const thumbnailUrl = url.replace('medium', 'thumbnail')
          if (i % 5 === 0) {
            return <img key={i} src={thumbnailUrl} className="w-[18%] mb-[2%] object-cover inline-block" />
          } else {
            return <img key={i} src={thumbnailUrl} className="w-[18%] mb-[2%] ml-[2%] object-cover inline-block" />
          }
        })}
      </div>
    </main>
  )
}

export default Page
