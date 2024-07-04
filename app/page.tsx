import Link from 'next/link'
import { parse, format } from 'date-fns'
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6'
import { PiNotebook } from 'react-icons/pi'
import { EN_TITLE_FONT } from '@/config'
import { discography, performances } from '@/data/static'
import SideBar from '@/components/sidebar'
import Navigation from '@/components/navigation'
import RandomImage from '@/components/random'
import '/node_modules/flag-icons/css/flag-icons.min.css'

export const Page = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (<>
    <div className="md:hidden">
      <SideBar />
    </div>
    <main className="max-w-[800px] mx-auto md:px-4 py-8">
      <header className="py-4 px-4 md:px-0 flex justify-between items-center">
        <div className="md:ml-1">
          <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>APKAS</h1>
          <p className={`${EN_TITLE_FONT.className} py-1`}>SHU/CESHMINA</p>
        </div>
        <div className="md:mr-1">
          <Navigation />
        </div>
      </header>

      <div className="pt-2 pb-12">
        <RandomImage />
      </div>

      <section id="about" className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>ABOUT</h2>
        <div className="py-2 text-sm">
          {lang === 'ja' ?
            <p className="py-1">
              ソフトウェアエンジニア/データサイエンティスト。
            </p> :
            <p className="py-1">
              Software engineer/data scientist.
            </p>
          } 
          {lang === 'ja' ?
            <p className="py-1">
              インターネット広告会社でwebアプリケーションの開発の他、
              プロダクトのデータ分析や仮説検証、機械学習モデルの構築に従事しています。
              最近はデータの民主化や、生成AIの業務活用に興味があります。
            </p> :
            <p className="py-1">
              Work on web application development at an internet advertising company,
              as well as data analysis, hypothesis testing, and machine learning model building for products.
              Recently interested in <span className="italic">data democratization</span> and
              generative AI use cases for the enterprise.
            </p>
          }
          {lang === 'ja' ?
            <p className="py-1">
              南米の民族風音楽「フォルクローレ」を演奏しています。
              <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>、
              <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">グルーポ★ブラザーズ</a>、
              <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>
              というグループで、主にサンポーニャとパーカッションを担当しています。
            </p> :
            <p className="py-1">
              Play Latin folk music known as &quot;folklore&quot; in Japan.
              As a member of <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>,
              <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">Grupo Brothers</a>,
              and <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>,
              I mainly play the zampoñas and the percussion.
            </p>
          }
          {lang === 'ja' ?
            <p className="py-1">
              最近は写真にハマっています。使用機材 (ボディ) はα7 III、α7S、PEN E-P7です。
              他には音楽制作、ディズニー、旅行、コンシューマーゲームなどが好きです。
            </p> :
            <p className="py-1">
              Recently, I&apos;ve been into photography, using α7 III, α7S, and PEN E-P7.
              I also enjoy music production, Disney, traveling, and consumer games.
            </p>
          }
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
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>WORKS</h2>
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

      <section id="blog" className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>BLOG</h2>
        <div className="text-sm">
          <p className="py-1">Under preparation.</p>
        </div>
      </section>

      <section id="contact" className="py-4 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>CONTACT</h2>
        <div className="text-sm">
          <p className="py-1">Under preparation.</p>
        </div>
      </section>

      <section className="mt-16 border-t-2 py-4 px-4 md:px-1 flex justify-between">
        <div className="py-1 text-xs">
          <p className="py-0.5 md:inline">
            <FaXTwitter className="inline pb-[1px]" /> <a href="https://x.com/ceshmina" target="_blank" className="text-blue-600">ceshmina</a>
          </p>
          <p className="py-0.5 md:inline md:pl-4">
            <FaInstagram className="inline pb-[1px]" /> <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-600">ceshmina</a>
          </p>
          <p className="py-0.5 md:inline md:pl-4">
            <FaGithub className="inline pb-[1px]" /> <a href="https://github.com/ceshmina" target="_blank" className="text-blue-600">ceshmina</a>
          </p>
        </div>

        <div className="py-1 text-xs">
          <p className="py-0.5">
            <PiNotebook className="inline pb-[1px]" /> <Link href="/diary" className="text-blue-600">my diary</Link> (in Japanese)
          </p>
        </div>
      </section>
    </main>
  </>)
}

const PageJa = () => <Page lang="ja" />
export default PageJa
