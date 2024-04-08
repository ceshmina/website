import Link from 'next/link'
import { getDiaries } from '@/core/diary/retrieve'

export const generateStaticParams = async () => {
  const diaries = await getDiaries('data/diary')
  return diaries.map(diary => ({ slug: diary.slug }))
}

const Page = ({ params }: { params: { slug: string }}) => {
  const { slug } = params
  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className="text-blue-500">戻る</Link></p>
        </div>
        <h1 className="text-2xl font-bold">{slug}</h1>
      </section>

      <section className="py-4">
      </section>
    </main>
  )
}

export default Page
