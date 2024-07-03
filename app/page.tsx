'use client'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { parse, format } from 'date-fns'
import { EN_TITLE_FONT } from '@/config'
import { discography, performances } from '@/data/static'
import RandomImage from '@/components/random'

const Page = () => {
  return (
    <main className="max-w-[800px] mx-auto md:px-4 my-8">
      <header className="py-4 px-4 md:px-0 flex justify-between items-center">
        <div className="md:ml-1">
          <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>APKAS</h1>
          <p className={`${EN_TITLE_FONT.className} py-1`}>SHU/CESHMINA</p>
        </div>
        <div className="md:mr-1">
          <p className={`${EN_TITLE_FONT.className} text-sm font-bold`}>
            <span className="mr-4"><Scroll to="about" duration={300} smooth>ABOUT</Scroll></span>
            <span><Scroll to="works" duration={300} smooth>WORKS</Scroll></span>
          </p>
        </div>
      </header>

      <div className="pt-2 pb-12">
        <RandomImage />
      </div>

      <section id="about" className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>ABOUT</h2>
        <div className="py-2 text-sm">
          <p className="py-1">Software engineer/data scientist.</p>
          <p className="py-1">
            Play Latin folk music known as &quot;folklore&quot; in Japan.
            Member of <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>
            , <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">Grupo Brothers</a>
            , and <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>.
          </p>
        </div>
      </section>

      <section className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>BACKGROUND</h2>
        <div className="py-2">
          <h3 className="pt-2 pb-2">Career</h3>
          <table className="text-sm text-left">
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 w-[90px] md:w-[150px] font-light">Jan 2023 -,</th>
              <td className="pr-1 w-[80px] md:w-[140px]">Data scientist,</td>
              <td><a href="https://adways-deee.net" target="_blank" className="text-blue-600">ADWAYS DEEE Inc.</a></td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr 2021 - Dec 2022,</th>
              <td className="pr-1">Software engineer,</td>
              <td><a href="https://www.adways.net/en" target="_blank" className="text-blue-600">Adways Inc.</a></td>
            </tr>
          </table>

          <h3 className="pt-4 pb-2">Education</h3>
          <table className="text-sm text-left">
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 w-[90px] md:w-[150px] font-light">Apr 2019 - Mar 2021,</th>
              <td className="pr-1 w-[80px] md:w-[140px]">M. Sc. in Physics,</td>
              <td>
                Graduate School of Science/
                <a href="https://www.icrr.u-tokyo.ac.jp/en" target="_blank" className="text-blue-600">Institute for Cosmic Ray Research</a>,
                the University of Tokyo.
              </td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr 2017 - Mar 2019,</th>
              <td className="pr-1">B. Sc. in Physics,</td>
              <td>Faculty of Science, the University of Tokyo.</td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr 2015 - Mar 2017,</th>
              <td className="pr-1"></td>
              <td>College of Arts and Sciences, the University of Tokyo.</td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr 2012 - Mar 2015,</th>
              <td className="pr-1"></td>
              <td>Todaiji Gakuen High School.</td>
            </tr>
          </table>
        </div>
      </section>

      <section id="works" className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>WORKS & ACTIVITIES</h2>
        <div className="py-2">
          <h3 className="pt-2 pb-2">Discography</h3>
          <div className="text-sm">
            {discography.sort((a, b) => b.year - a.year).map((d, idx) => {
              const n = discography.length - idx
              return <p className="py-1" key={idx}>
                {n}. {d.year}, <a href={d.link} target="_blank" className="text-blue-600 italic">{d.title}</a> ({d.note}).
              </p>
            })}
          </div>
          <h3 className="pt-4 pb-2">Performances <span className="text-sm">(latest 5 events)</span></h3>
          <div className="text-sm">
            {performances.sort((a, b) => parseInt(b.date) - parseInt(a.date)).slice(0, 5).map((p, idx) => {
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
          <p className="pt-4 pb-2 text-sm"><Link href="/works" className="text-blue-600">Show all</Link></p>
        </div>
      </section>

      <section className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>LINKS</h2>
        <div className="py-2 text-sm">
          <p className="py-1">X <a href="https://x.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
          <p className="py-1">Instagram <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
          <p className="py-1">GitHub <a href="https://github.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
        </div>
      </section>

      <section className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>OTHER CONTENTS</h2>
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-600">Diary</Link> (in Japanese)</p>
        </div>
      </section>
    </main>
  )
}

export default Page
