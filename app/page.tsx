import Link from 'next/link'
import { parse, format } from 'date-fns'
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6'
import { PiNotebook } from 'react-icons/pi'
import { EN_TITLE_FONT } from '@/config'
import { discography, performances } from '@/data/static'
import SideBar from '@/components/sidebar'
import Navigation from '@/components/navigation'
import RandomImage from '@/components/random'
import Job from '@/components/about/job'
import School from '@/components/about/school'
import '/node_modules/flag-icons/css/flag-icons.min.css'

export const Page = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (<>
    <div className="md:hidden">
      <SideBar />
    </div>
    <main className="py-8">
      <header className="max-w-[800px] mx-auto py-4 px-4 md:px-0 flex justify-between items-center">
        <div className="md:ml-1">
          <h1 className={`${EN_TITLE_FONT.className} text-2xl font-bold`}>APKAS</h1>
          <p className={`${EN_TITLE_FONT.className} py-1`}>SHU/CESHMINA</p>
        </div>
        <div className="md:mr-1">
          <Navigation />
        </div>
      </header>

      <div className="pt-2 pb-12 max-w-[800px] mx-auto ">
        <RandomImage />
      </div>

      <section id="about" className="max-w-[800px] mx-auto pt-4 pb-8 px-4 md:px-0">
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
              インターネット広告会社でwebアプリケーションの開発の他、<></>
              プロダクトのデータ分析や仮説検証、機械学習モデルの構築/運用に従事。<></>
              特にデータの民主化や、生成AIの業務活用に興味がある。
            </p> :
            <p className="py-1">
              Work on web application development at an internet advertising company,
              and also focus on data analysis, hypothesis testing,
              and building and operating machine learning models for various products.
              Lately, I&apos;ve been interested in <span className="italic">data democratization</span> and
              exploring generative AI use cases for enterprises.
            </p>
          }
          {lang === 'ja' ?
            <p className="py-1">
              趣味で南米の民族風音楽「フォルクローレ」を演奏している。
              <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>、
              <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">グルーポ★ブラザーズ</a>、
              <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>
              というグループで、主にサンポーニャとパーカッションを担当。
            </p> :
            <p className="py-1">
              In my free time, I play Latin folk music, known as &quot;folklore,&quot; in Japan.
              As a member of <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-600">YAMA</a>
              , <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-600">Grupo Brothers</a>,
              and <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-600">Los Amidas</a>,
              I primarily play the zampoñas and percussion instruments.
            </p>
          }
          {lang === 'ja' ?
            <p className="py-1">
              最近は写真にハマっている。<></>
              他には音楽制作、ディズニー、旅行、コンシューマーゲームなどが好き。
            </p> :
            <p className="py-1">
              Recently, I&apos;ve taken up photography.
              Also enjoy music production, Disney, traveling, and playing video games.
            </p>
          }
        </div>
      </section>

      <section className="py-8 text-gray-100 bg-gray-800">
        <div className="max-w-[838px] mx-auto pt-4 pb-12 px-4 md:border-2 border-gray-100">
          <h3 className={`${EN_TITLE_FONT.className} font-bold pt-2 pb-4 pl-1`}>CAREER</h3>
          <Job
            period="JAN 2023 - PRESENT"
            job="Data scientist"
            company="ADWAYS DEEE Inc."
            description={[
              'アドプラットフォーム事業部の分社化に伴い、出向中。',
              'リードデータサイエンティストとして、引き続きプロダクトのデータ分析や仮説検証、機械学習モデルの構築/運用に従事。社内での分析業務にとどまらず、メディアやクライアントと連携した分析プロジェクトの推進、データ活用の提案なども行っている。',
              '最近は社内でのデータ活用をより広め民主化するための取り組みや、生成AIをビジネスに適用するための研究開発にも関わっている。']}
            keywords={[
              'Python', 'BigQuery', 'Tableau', 'Dataform', 'Vertex AI',
              'causal analysis', 'hypothesis testing', 'data democratization', 'generative AI']}
          />
          <Job
            period="APR 2021 - DEC 2022"
            job="Software engineer"
            company="Adways Inc."
            description={[
              'ソフトウェアエンジニアとして新卒入社。当初はリワード広告プラットフォーム「AppDriver」のフロントエンド・バックエンド開発に従事。',
              '1年目のうちからアプリケーションの開発業務と並行して、プロダクト全体の課題を探索するデータ分析や新規機能の仮説検証、また機械学習によるレコメンドモデルの構築・運用業務にも携わった。']}
            keywords={[
              'TypeScript', 'Vue.js', 'Scala', 'Play Framework',
              'Python', 'Flask', 'BigQuery', 'Kubernetes', 'deep learning']}
          />

          <h3 className={`${EN_TITLE_FONT.className} font-bold pt-8 pb-4 pl-1`}>EDUCATION</h3>
          <School
            period="APR 2019 - MAR 2021"
            job="M. Sc. in Physics"
            school="Graduate School of Science/Institute for Cosmic Ray Research, the University of Tokyo"
          />
          <School
            period="APR 2017 - MAR 2019"
            job="B. Sc. in Physics"
            school="Faculty of Science, the University of Tokyo"
          />
          <School
            period="APR 2015 - MAR 2017"
            job=""
            school="College of Arts and Sciences, the University of Tokyo"
          />
          <School
            period="APR 2012 - MAR 2015"
            job=""
            school="Todaiji Gakuen High School"
          />
        </div>
      </section>

      <section id="works" className="max-w-[800px] mx-auto pt-16 pb-8 px-4 md:px-0">
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

      <section id="blog" className="max-w-[800px] mx-auto py-8 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>BLOG</h2>
        <div className="text-sm">
          <p className="py-1">Under preparation.</p>
        </div>
      </section>

      <section id="contact" className="max-w-[800px] mx-auto py-8 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>CONTACT</h2>
        <div className="text-sm">
          <p className="py-1">Under preparation.</p>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto mt-16 border-t-2 py-4 px-4 md:px-1 flex justify-between">
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
