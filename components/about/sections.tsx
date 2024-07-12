'use client'

import { useState } from 'react'
import Link from 'next/link'

import Markdown from 'react-markdown'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import { CareerCard } from '@/components/about/career'
import { EducationCard } from '@/components/about/education'
import { ShowButton } from '@/components/about/button'


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


type CareerCardProps = {
  period: string
  career: string
  company: string
  description: string
  keywords: string[]
}

const careersJa: CareerCardProps[] = [
  {
    period: 'JAN 2023 - PRESENT',
    career: 'データサイエンティスト',
    company: '株式会社ADWAYS DEEE',
    description: `
アドプラットフォーム事業部の分社化に伴い、出向中。

リードデータサイエンティストとして、引き続きプロダクトのデータ分析や仮説検証、機械学習モデルの構築/運用に従事。社内での分析業務にとどまらず、メディアやクライアントと連携した分析プロジェクトの推進、データ活用の提案なども行っている。

最近は社内でのデータ活用をより広め民主化するための取り組みや、生成AIをビジネスに適用するための研究開発にも関わっている。
`,
    keywords: [
      'Python', 'BigQuery', 'Tableau', 'Dataform', 'Vertex AI',
      'causal analysis', 'hypothesis testing', 'data democratization', 'generative AI'
    ]
  },
  {
    period: 'APR 2021 - DEC 2022',
    career: 'ソフトウェアエンジニア',
    company: '株式会社アドウェイズ',
    description: `
ソフトウェアエンジニアとして新卒入社。当初はリワード広告プラットフォーム「AppDriver」のフロントエンド・バックエンド開発に従事。

1年目のうちからアプリケーションの開発業務と並行して、プロダクト全体の課題を探索するデータ分析や新規機能の仮説検証、また機械学習によるレコメンドモデルの構築・運用業務にも携わった。
`,
    keywords: [
      'TypeScript', 'Vue.js', 'Scala', 'Play Framework',
      'Python', 'Flask', 'BigQuery', 'Kubernetes', 'deep learning'
    ]
  }
]

const carrersEn: CareerCardProps[] = [
  {
    period: 'JAN 2023 - PRESENT',
    career: 'Data scientist',
    company: 'ADWAYS DEEE Inc.',
    description: `
Currently seconded due to the spin-off of the Ad Platform Division.

As a Lead-Data Scientist, I continue to be involved in data analysis, hypothesis testing, and the development and operation of machine learning models for products. Beyond internal analysis work, I also promote analysis projects in collaboration with media and clients, and propose ways to leverage data.

Recently, I have been engaged in initiatives to further spread and democratize data utilization within the company, as well as research and development to apply generative AI to business operations.
`,
    keywords: [
      'Python', 'BigQuery', 'Tableau', 'Dataform', 'Vertex AI',
      'causal analysis', 'hypothesis testing', 'data democratization', 'generative AI'
    ]
  },
  {
    period: 'APR 2021 - DEC 2022',
    career: 'Software engineer',
    company: 'Adways Inc.',
    description: `
I joined the company as a new graduate software engineer. Initially, I was involved in both frontend and backend development for the reward advertising platform "AppDriver."

From my first year, alongside application development tasks, I also engaged in data analysis to explore product-wide issues, hypothesis testing for new features, and the development and operation of recommendation models using machine learning.
`,
    keywords: [
      'TypeScript', 'Vue.js', 'Scala', 'Play Framework',
      'Python', 'Flask', 'BigQuery', 'Kubernetes', 'deep learning'
    ]
  }
]


type EducationCardProps = {
  period: string
  program?: string
  school: string
}

const educationsJa = [
  {
    period: 'APR 2019 - MAR 2021',
    program: '修士 (理学)',
    school: '東京大学大学院理学系研究科物理学専攻/宇宙線研究所'
  },
  {
    period: 'APR 2017 - MAR 2019',
    program: '学士 (理学)',
    school: '東京大学理学部物理学科'
  },
  {
    period: 'APR 2015 - MAR 2017',
    school: '東京大学教養学部理科I類'
  },
  {
    period: 'APR 2012 - MAR 2015',
    school: '東大寺学園高等学校'
  }
]

const educationsEn = [
  {
    period: 'APR 2019 - MAR 2021',
    program: 'M. Sc. in Physics',
    school: 'Graduate School of Science/Institute for Cosmic Ray Research, the University of Tokyo'
  },
  {
    period: 'APR 2017 - MAR 2019',
    program: 'B. Sc. in Physics',
    school: 'Faculty of Science, the University of Tokyo'
  },
  {
    period: 'APR 2015 - MAR 2017',
    school: 'College of Arts and Sciences, the University of Tokyo'
  },
  {
    period: 'APR 2012 - MAR 2015',
    school: 'Todaiji Gakuen High School'
  }
]

export const Career = (props: { lang: 'ja' | 'en' }) => {
  const [showMore, setShowMore] = useState(false)
  const toggleShowMore = () => setShowMore(!showMore)

  const { lang } = props
  const careers = lang === 'ja' ? careersJa : carrersEn
  const educations = lang === 'ja' ? educationsJa : educationsEn
  const showCareers = showMore ? careers : careers.slice(0, 2)
  const showEducations = showMore ? educations : null

  return (
    <section>
      <h3 className="font-alt font-bold my-4">CAREER</h3>
      {showCareers.map((career, i) => (
        <div className="my-2">
          <CareerCard key={i} {...career} />
        </div>
      ))}

      {showEducations && <div>
        <h3 className="font-alt font-bold mt-8 mb-4">EDUCATION</h3>
        {educations.map((education, i) => (
          <div className="my-1">
            <EducationCard key={i} {...education} />
          </div>
        ))}
      </div>}

      {showMore ? (
        <p className="text-center mt-4">
          <ShowButton text="SHOW LESS" onClick={toggleShowMore} />
        </p>
      ) : (
        <p className="text-center">
          <ShowButton text="SHOW MORE" onClick={toggleShowMore} />
        </p>
      )}
    </section>
  )
}
