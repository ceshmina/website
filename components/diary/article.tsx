import Markdown from 'react-markdown'
import Image from '@/components/diary/image'

const Article = (props: { content: string }) => {
  const { content } = props
  return (
    <Markdown components={{
      p: ({ children }) => <p className="py-1">{children}</p>,
      a: ({ children, href }) => (
        href && href.startsWith('http')
        ? <a href={href} className="text-blue-600" target="_blank">{children}</a>
        : <a href={href} className="text-blue-600">{children}</a>
      ),
      img: ({ src }) => <div className="py-4"><Image src={src || null} /></div>,
      hr: () => <hr className="mx-auto my-8 w-[300px] max-w-[50%] h-[3px] bg-gray-200 border-0 rounded" />,
    }} >{content}</Markdown>
  )
}

export default Article
