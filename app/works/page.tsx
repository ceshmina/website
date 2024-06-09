import Link from 'next/link'
import { parse, format } from 'date-fns'
import { EN_TITLE_FONT } from '@/config'
import { discography, performances } from '@/data/static'

const Page = () => {
  return (
    <main className="max-w-[800px] mx-auto px-4 my-8">
      <section className="py-4">
        <div className="py-2 text-sm">
          <p><Link href="/" className={`${EN_TITLE_FONT.className} font-medium text-blue-500`}>APKAS</Link></p>
        </div>
        <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>WORKS & ACTIVITIES</h1>
      </section>

      <section className="py-4">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>DISCOGRAPHY</h2>
        <div className="py-2 text-sm">
          {discography.sort((a, b) => b.year - a.year).map((d, idx) => {
            const n = discography.length - idx
            return <p className="py-1" key={idx}>
              {n}. {d.year}, <a href={d.link} target="_blank" className="text-blue-600 italic">{d.title}</a> ({d.note}).
            </p>
          })}
        </div>
      </section>

      <section className="py-4">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>PERFORMANCES</h2>
        <p className="pt-1 pb-3 text-sm">Display the events since 2023.</p>
        <div className="py-2 text-sm">
          {performances.sort((a, b) => parseInt(b.date) - parseInt(a.date)).map((p, idx) => {
            const n = performances.length - idx
            const dateStr = format(parse(p.date, 'yyyyMMdd', new Date), 'MMM d, yyyy')
            const dateLink = <Link href={`/diary/entry/${p.date}`} className="text-blue-600">{dateStr}</Link>
            const note = p.location && p.note ? `${p.location}, ${p.note}` : p.location || p.location || ''
            if (!p.title)
              return <p className="py-1" key={idx}>{n}. {dateLink} ({note}).</p>
            else {
              return <p className="py-1" key={idx}>{n}. {dateLink}, <span className="italic">{p.title}</span> ({note}).</p>
            }
          })}
        </div>
      </section>
    </main>
  )
}

export default Page
