import Link from 'next/link'

import Markdown from 'react-markdown'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import Job from '@/components/about/job'
import School from '@/components/about/school'


const contentJa = `
ソフトウェアエンジニア/データサイエンティスト。

インターネット広告会社でwebアプリケーションの開発の他、プロダクトのデータ分析や仮説検証、機械学習モデルの構築・運用に従事。特にデータの民主化や、生成AIの業務活用に興味がある。

趣味で南米の民族風音楽「フォルクローレ」を演奏している。[YAMA](https://x.com/yamafolklore)、[グルーポ★ブラザーズ](https://x.com/grupobrothers)、[Los Amidas](https://x.com/StreetFolk_Amid)というグループで、主にサンポーニャとパーカッションを担当。

最近は写真にハマっている。他には音楽制作、ディズニー、旅行、コンシューマーゲームなどが好き。
`

const contentEn = `
Software engineer/data scientist.

Work on web application development at an internet advertising company, and also focus on data analysis, hypothesis testing, and building and operating machine learning models for various products. Lately, I've been interested in _data democratization_ and exploring generative AI use cases for enterprises.

In my free time, I play Latin folk music, known as "folklore," in Japan. As a member of [YAMA](https://x.com/yamafolklore), [Grupo Brothers](https://x.com/grupobrothers), and [Los Amidas](https://x.com/StreetFolk_Amid), I primarily play the zampoñas and percussion instruments.

Recently, I've taken up photography. Also enjoy music production, Disney, traveling, and playing video games.
`


export const About = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (
    <section id="about">
      <h2 className="text-lg font-alt font-bold">ABOUT</h2>
      <div className="py-2">
        <Markdown components={{
          p: ({ node, children, ...props }) => <p className="text-sm my-1.5" {...props}>{children}</p>,
          a: ({ node, href, children, ...props }) => (
            <span>
              <Link href={href || "/"} target="_blank" className="link" {...props}>
                {children}
              </Link>
              <LiaExternalLinkAltSolid className="text-xs inline-block" />
            </span>
          )
        }}>
          {lang === 'ja' ? contentJa : contentEn}
        </Markdown>
      </div>
    </section>
  )
}


export const Career = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (
    <section>
      <h3 className="font-alt font-bold pt-2 pb-4 pl-1">CAREER</h3>
      <Job
        period="JAN 2023 - PRESENT"
        job={lang === 'ja' ? 'データサイエンティスト' : 'Data scientist'}
        company={lang === 'ja' ? '株式会社ADWAYS DEEE' : 'ADWAYS DEEE Inc.'}
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
        job={lang === 'ja' ? 'ソフトウェアエンジニア' : 'Software engineer'}
        company={lang === 'ja' ? '株式会社アドウェイズ': 'Adways Inc.'}
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

      <h3 className="font-alt font-bold pt-8 pb-4 pl-1">EDUCATION</h3>
      <School
        period="APR 2019 - MAR 2021"
        job={lang === 'ja' ? '修士 (理学)' : 'M. Sc. in Physics'}
        school={lang === 'ja' ? '東京大学大学院理学系研究科物理学専攻/宇宙線研究所' : 'Graduate School of Science/Institute for Cosmic Ray Research, the University of Tokyo'}
      />
      <School
        period="APR 2017 - MAR 2019"
        job={lang === 'ja' ? '学士 (理学)': 'B. Sc. in Physics'}
        school={lang === 'ja' ? '東京大学理学部物理学科' : 'Faculty of Science, the University of Tokyo'}
      />
      <School
        period="APR 2015 - MAR 2017"
        job=""
        school={lang === 'ja' ? '東京大学教養学部理科I類' : 'College of Arts and Sciences, the University of Tokyo'}
      />
      <School
        period="APR 2012 - MAR 2015"
        job=""
        school={lang === 'ja' ? '東大寺学園高等学校' : 'Todaiji Gakuen High School'}
      />
    </section>
  )
}
