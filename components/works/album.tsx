import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaMusic } from 'react-icons/fa6'
import Markdown from 'react-markdown'


const MusicLink = (props: { title: string, icon: IconType, url: string }) => {
  const { title, icon, url } = props
  const Icon = icon
  return (
    <span className="color-anti button-anti font-medium mr-1 mt-0.5 px-2 rounded-full">
      <Link href={url} target="_blank">
        {title} <Icon className="inline-block" />
      </Link>
    </span>
  )
}


export type AlbumProps = {
  title: string
  year: string
  descriptionJa: string
  descriptionEn: string
  img: string
  links: { title: string, icon: IconType, url: string }[]
}

export const Album = (props: AlbumProps & { lang: 'ja' | 'en' }) => {
  const { title, year, descriptionJa, descriptionEn, img, links, lang } = props

  return (
    <div className="mt-6">
      <div className="my-4 flex justify-between align-bottom border-b-2 border-main">
        <p className="pt-1 pl-1 font-medium">{title}</p>
        <p className="text-sm font-bold font-alt color-anti border-2 border-main px-3 pt-1">
          {year}&nbsp;/&nbsp;<FaMusic className="inline mt-[-2px] pb-[2px] mr-1" />ALBUM
        </p>
      </div>
      <div className="flex items-start">
        <img src={img} className="max-w-[30%] mt-1" />
        <div className="text-xs pl-4">
          <Markdown components={{
            p: ({ node, children, ...props }) => <p className="mt-0.5" {...props}>{children}</p>,
          }}>
            {lang === 'ja' ? descriptionJa : descriptionEn}
          </Markdown>
          <p className="mt-2">{lang === 'ja' ?
            '各種音楽サブスクサービスにて配信中'
            : 'Available on various music streaming services'
          }:</p>
          <p className="mt-1 leading-6">
            {links.map((link, i) => (
              <span key={i}>
                <MusicLink {...link} />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}
