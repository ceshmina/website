import Link from 'next/link'
import { format, parse } from 'date-fns'
import { FaXTwitter, FaInstagram, FaGithub, FaMusic } from 'react-icons/fa6'
import { PiNotebook } from 'react-icons/pi'
import { MdOutlineEmail } from 'react-icons/md'
import { EN_TITLE_FONT } from '@/config'
import SideBar from '@/components/sidebar'
import Navigation from '@/components/navigation'
import RandomImage from '@/components/random'
import Job from '@/components/about/job'
import School from '@/components/about/school'
import { Spotify, AppleMusic, AmazonMusic } from '@/components/works/musiclink'
import { performances } from '@/data/static'
import '/node_modules/flag-icons/css/flag-icons.min.css'

export const Page = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (<>
    <div className="md:hidden">
      <SideBar />
    </div>
    <main className="mt-8">
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
            description={lang === 'ja' ? [
              'アドプラットフォーム事業部の分社化に伴い、出向中。',
              'リードデータサイエンティストとして、引き続きプロダクトのデータ分析や仮説検証、機械学習モデルの構築/運用に従事。社内での分析業務にとどまらず、メディアやクライアントと連携した分析プロジェクトの推進、データ活用の提案なども行っている。',
              '最近は社内でのデータ活用をより広め民主化するための取り組みや、生成AIをビジネスに適用するための研究開発にも関わっている。'
            ] : [
              'Currently seconded due to the spin-off of the Ad Platform Division.',
              'As a Lead-Data Scientist, I continue to be involved in data analysis, hypothesis testing, and the development and operation of machine learning models for products. Beyond internal analysis work, I also promote analysis projects in collaboration with media and clients, and propose ways to leverage data.',
              'Recently, I have been engaged in initiatives to further spread and democratize data utilization within the company, as well as research and development to apply generative AI to business operations.'
            ]}
            keywords={[
              'Python', 'BigQuery', 'Tableau', 'Dataform', 'Vertex AI',
              'causal analysis', 'hypothesis testing', 'data democratization', 'generative AI']}
          />
          <Job
            period="APR 2021 - DEC 2022"
            job="Software engineer"
            company="Adways Inc."
            description={lang === 'ja' ? [
              'ソフトウェアエンジニアとして新卒入社。当初はリワード広告プラットフォーム「AppDriver」のフロントエンド・バックエンド開発に従事。',
              '1年目のうちからアプリケーションの開発業務と並行して、プロダクト全体の課題を探索するデータ分析や新規機能の仮説検証、また機械学習によるレコメンドモデルの構築・運用業務にも携わった。'
            ] : [
              'I joined the company as a new graduate software engineer. Initially, I was involved in both frontend and backend development for the reward advertising platform "AppDriver."',
              'From my first year, alongside application development tasks, I also engaged in data analysis to explore product-wide issues, hypothesis testing for new features, and the development and operation of recommendation models using machine learning.'
            ]}
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

      <section id="works" className="max-w-[800px] mx-auto py-16 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>WORKS</h2>
        <div className="my-8">
          <div className="my-4 flex justify-between align-bottom border-b-2 border-gray-700">
            <p className="pl-1 pt-1 font-medium">Ambivalencia</p>
            <p className={`${EN_TITLE_FONT.className} text-sm font-bold px-4 py-1 border-2 border-gray-700 mb-[-2px] text-gray-100 bg-gray-700`}>
              2022&nbsp;/&nbsp;
              <FaMusic className="inline mt-[-2px] pb-[2px] mr-1" />ALBUM
            </p>
          </div>
          <div className="flex items-start">
            <img src="/ambivalencia.webp" className="max-w-[30%] py-1" />
            <div className="text-xs pl-4">
              {lang === 'ja' ?
                <p className="py-1">西田フレンズとしての2ndアルバム。オンライン・コスキンで初披露した「Espiral」、リーダー・西田のボリビアへの想いを込めた「Para Ti Lejos」など、全11曲を収録。</p> :
                <p className="py-1">The second album by Nishida Friends. It includes 11 tracks, such as &quot;Espiral,&quot; which was first performed at the Online Cosquín, and &quot;Para Ti Lejos,&quot; a song that reflects the leader Nishida&apos;s feelings towards Bolivia.</p>
              }
              {lang === 'ja' ?
                <p className="py-1">11曲中6曲を作曲。サンポーニャとギターを中心に演奏した他、全編のレコーディング・ミキシング・マスタリングを担当した。</p> :
                <p className="py-1">Out of the 11 tracks, I composed 6. In addition to playing the zampoñas and guitar, I was responsible for the recording, mixing, and mastering of the entire album.</p>
              }
              <p className="pt-2 pb-1">{lang === 'ja' ? '各種音楽サブスクサービスにて配信中' : 'Available on various music streaming services'}:</p>
              <p className="leading-6">
                <Link href="https://open.spotify.com/intl-ja/album/1s3ObF3GkmBId0ZbXMkro4" target="_blank">
                  <Spotify />
                </Link>
                <Link href="https://music.apple.com/jp/album/ambivalencia/1658982598" target="_blank">
                  <AppleMusic />
                </Link>
                <Link href="https://www.amazon.co.jp/music/player/albums/B0BPM6RZ5R?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211" target="_blank">
                  <AmazonMusic />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="my-4 flex justify-between align-bottom border-b-2 border-gray-700">
            <p className="pl-1 pt-1 font-medium">Aventura</p>
            <p className={`${EN_TITLE_FONT.className} text-sm font-bold px-4 py-1 border-2 border-gray-700 mb-[-2px] text-gray-100 bg-gray-700`}>
              2021&nbsp;/&nbsp;
              <FaMusic className="inline mt-[-2px] pb-[2px] mr-1" />ALBUM
            </p>
          </div>
          <div className="flex items-start">
            <img src="/aventura.webp" className="max-w-[30%] py-1" />
            <div className="text-xs pl-4">
              {lang === 'ja' ? 
                <p className="py-1">西田フレンズの記念すべき1stアルバム。リーダー作曲の初めてのオリジナル曲「Tren de Aventura」、ライブで好評の「El Horizonte」などインスト7曲を収録。</p> :
                <p className="py-1">The landmark 1st album by Nishida Friends. It includes 7 instrumental tracks, such as the leader&apos;s first original composition &quot;Tren de Aventura&quot; and the popular live performance piece &quot;El Horizonte.&quot;</p>
              }
              {lang === 'ja' ?
                <p className="py-1">うち3曲を作曲、全編でサンポーニャとギターを中心に演奏している。メンバー2名で分担し、レコーディング・ミキシング・マスタリングを実施。</p> :
                <p className="py-1">I composed 3 of the tracks and primarily played the zampoñas and guitar throughout the album. The recording, mixing, and mastering were carried out by two members.</p>
              }
              <p className="pt-2 pb-1">{lang === 'ja' ? '各種音楽サブスクサービスにて配信中' : 'Available on various music streaming services'}:</p>
              <p className="leading-6">
                <Link href="https://open.spotify.com/intl-ja/album/44Dv1jcm8ZgwBxiZhyVCxZ" target="_blank">
                  <Spotify />
                </Link>
                <Link href="https://music.apple.com/jp/album/aventura/1553005052" target="_blank">
                  <AppleMusic />
                </Link>
                <Link href="https://www.amazon.co.jp/music/player/albums/B08WC2Z716?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211" target="_blank">
                  <AmazonMusic />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <h3 className={`${EN_TITLE_FONT.className} font-bold pt-2 pb-4`}>RECENT EVENTS</h3>
        <div className="flex flex-wrap justify-between">
          {performances.sort((a, b) => parseInt(b.date) - parseInt(a.date)).slice(0, 10).map((p, i) => {
            const d = format(parse(p.date, 'yyyyMMdd', new Date()), 'MMM d, yyyy')
            return (<div className="w-[100%] sm:w-[49%] my-2 inline-block border-[1px] border-gray-300 hover:bg-gray-200 transition duration-300 rounded-[8px] overflow-hidden p-0" key={i}>
              <Link href={`/diary/entry/${p.date}`}>
                <div className="flex justify-between">
                  <div className="px-2 py-1">
                    <p className={`${EN_TITLE_FONT.className} text-xs font-bold`}>{d.toUpperCase()}</p>
                    <p className="text-sm font-bold leading-4 pb-1 font-medium">{p.title}</p>
                    <p className="text-xs text-gray-700">{p.location}{p.location && p.note && ', '}{p.note}</p>
                  </div>
                  <img src={p.image || '/events/20240629.jpg'} className="max-w-[20%] " />
                </div>
              </Link>
            </div>)
          })}
        </div>
      </section>

      <section id="blog" className="py-8 bg-gray-300">
        <div className="max-w-[838px] mx-auto pt-4 pb-12 px-4">
          <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>BLOG</h2>
          <div className="text-sm">
            <p className="py-1">Under preparation...</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-[800px] mx-auto pt-12 pb-8 px-4 md:px-0">
        <h2 className={`${EN_TITLE_FONT.className} text-lg font-bold`}>CONTACT</h2>
        <div>
          <p className="py-2"><MdOutlineEmail className="inline text-sm" /> <code className="text-[13px]">shu[at]apkas.net</code></p>
        </div>
      </section>

      <section className="mt-12 pt-8 pb-2 text-gray-100 bg-gray-800">
        <div className="max-w-[800px] mx-auto px-4 md:px-1 flex">
          <div className="py-1 md:ml-[-4px] text-xs pr-8 md:pr-4 border-r-[1px] border-gray-300">
            <p className="py-0.5 md:inline">
              <FaXTwitter className="inline pb-[1px]" /> <a href="https://x.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
            <p className="py-0.5 md:inline md:pl-4">
              <FaInstagram className="inline pb-[1px]" /> <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
            <p className="py-0.5 md:inline md:pl-4">
              <FaGithub className="inline pb-[1px]" /> <a href="https://github.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
          </div>

          <div className="py-1 pl-8 md:pl-4 text-xs">
            <p className="py-0.5 md:inline">
              <PiNotebook className="inline pb-[1px]" /> <Link href="/diary" className="text-blue-300">my diary</Link>
              {lang === 'en' && ' (in Japanese)'}
            </p>
          </div>
        </div>
      </section>
    </main>
  </>)
}

const PageJa = () => <Page lang="ja" />
export default PageJa
