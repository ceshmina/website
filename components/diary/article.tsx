import Markdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

import Image from '@/components/diary/image'

const Article = (props: { content: string, showImgMetaData?: boolean, useAltAsCaption?: boolean }) => {
  const { content, showImgMetaData, useAltAsCaption } = props
  return (
    <Markdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        p: ({ children }) => {
          if (children && !Array.isArray(children) && typeof children === 'object') {
            return <p className="py-2 text-center">{children}</p>
          }
          return <p className="py-1">{children}</p>
        },
        a: ({ children, href }) => (
          href && href.startsWith('http')
          ? <a href={href} className="text-blue-600" target="_blank">{children}</a>
          : <a href={href} className="text-blue-600">{children}</a>
        ),
        h2: ({ children }) => <h2 className="text-lg font-normal py-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-base font-normal py-2">{children}</h3>,
        img: ({ src, alt, title }) => <div className="py-4">
          <Image src={src || null} alt={alt || ''} title={title} showMetaData={showImgMetaData} useAltAsCaption={useAltAsCaption} />
        </div>,
        hr: () => <hr className="mx-auto my-8 w-[300px] max-w-[50%] h-[3px] bg-gray-200 border-0 rounded" />,
        ul: ({ children }) => <ul className="py-3 pl-5 list-disc">{children}</ul>,
        li: ({ children }) => <li className="py-0.5">{children}</li>,
        code: ({ children }) => <code className="text-[13px] bg-gray-200 px-1.5 py-0.5 rounded">{children}</code>,
        pre: ({ children }) => <pre className="bg-gray-200 p-2 rounded my-4 whitespace-normal break-all">{children}</pre>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-2 ml-1 my-4">{children}</blockquote>,
      }}
    >{content}</Markdown>
  )
}

export default Article
