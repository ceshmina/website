import Link from 'next/link'
import { Josefin_Slab } from 'next/font/google'
import { parse, format } from 'date-fns'
import './globals.css'

const titleFont = Josefin_Slab({ subsets: ['latin'], weight: ["700"] })

const performances = [
  { date: '20240421', title: 'ホセ犬伏『再会のサンバ』リリース記念フォルクローレコンサート', note: 'support' },
  { date: '20240428', title: 'フォルクローレ演奏会2024 en IRIFUNE', note: 'as YAMA' }
]

const Page = () => {
  return (
    <main className="max-w-[800px] mx-auto px-4 my-8">
      <section className="py-4">
        <h1 className={`${titleFont.className} text-2xl font-bold`}>APKAS</h1>
        <p className={`${titleFont.className} py-1`}>SHU/CESHMINA</p>
      </section>

      <section className="py-4">
        <h2 className={`${titleFont.className} text-lg font-bold`}>ABOUT</h2>
        <div className="py-2 text-sm">
          <p className="py-1">Software engineer/data scientist.</p>
          <p className="py-1">
            Play Latin folk music known as &quot;folklore&quot; in Japan.
            Member of <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>
            , <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">Grupo Brothers</a>
            , & <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>.
          </p>
        </div>
      </section>

      <section className="py-4">
        <h2 className={`${titleFont.className} text-lg font-bold`}>BACKGROUND</h2>
        <div className="py-2">
          <h3 className="pt-4 pb-2">Career</h3>
          <table className="text-sm text-left">
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 w-[90px] md:w-[150px] font-light">Jan. 2023 -:</th>
              <td className="pr-1 w-[80px] md:w-[130px]">Data scientist</td>
              <td>@ <a href="https://adways-deee.net" target="_blank" className="text-blue-600">ADWAYS DEEE Inc.</a></td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr. 2021 - Dec. 2022:</th>
              <td className="pr-1">Software engineer</td>
              <td>@ <a href="https://www.adways.net/en" target="_blank" className="text-blue-600">Adways Inc.</a></td>
            </tr>
          </table>

          <h3 className="pt-4 pb-2">Education</h3>
          <table className="text-sm text-left">
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 w-[90px] md:w-[150px] font-light">Apr. 2019 - Mar. 2021:</th>
              <td className="pr-1 w-[80px] md:w-[130px]">M. Sc. in Physics</td>
              <td>
                @ Graduate School of Science/
                <a href="https://www.icrr.u-tokyo.ac.jp/en" target="_blank" className="text-blue-600">Institute for Cosmic Ray Research</a>,
                the University of Tokyo
              </td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr. 2017 - Mar. 2019:</th>
              <td className="pr-1">B. Sc. in Physics</td>
              <td>@ Faculty of Science, the University of Tokyo</td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr. 2015 - Mar. 2017:</th>
              <td className="pr-1"></td>
              <td>@ College of Arts and Science, the University of Tokyo</td>
            </tr>
            <tr className="align-text-top">
              <th className="py-0.5 pr-2 font-light">Apr. 2012 - Mar. 2015:</th>
              <td className="pr-1"></td>
              <td>@ Todaiji Gakuen High School</td>
            </tr>
          </table>
        </div>
      </section>

      <section className="py-4">
        <h2 className={`${titleFont.className} text-lg font-bold`}>ACTIVITIES</h2>
        <div className="py-2">
          <h3 className="pt-4 pb-2">Performances <span className="text-sm">(since Apr. 2024)</span></h3>
          <div className="text-sm">
            {performances.sort((a, b) => parseInt(b.date) - parseInt(a.date)).map((p, idx) => {
              const n = performances.length - idx
              const dateStr = format(parse(p.date, 'yyyyMMdd', new Date), 'MMM. d, yyyy')
              return <p className="py-1">{n}. {dateStr}, <span className="italic">{p.title}</span> ({p.note})</p>
            })}
          </div>
        </div>
      </section>

      <section className="py-4">
        <h2 className={`${titleFont.className} text-lg font-bold`}>LINKS</h2>
        <div className="py-2 text-sm">
          <p className="py-1">X <a href="https://x.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
          <p className="py-1">Instagram <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
          <p className="py-1">GitHub <a href="https://github.com/ceshmina" target="_blank" className="text-blue-600">@ceshmina</a></p>
        </div>
      </section>

      <section className="py-4">
        <h2 className={`${titleFont.className} text-lg font-bold`}>CONTENTS</h2>
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-600">Diary</Link> (in Japanese)</p>
        </div>
      </section>
    </main>
  )
}

export default Page
