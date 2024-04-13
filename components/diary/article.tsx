import Markdown from 'react-markdown'
import Image from '@/components/diary/image'

const Article = (props: { content: string }) => {
  const { content } = props
  return (
    <Markdown components={{
      p: ({ children }) => <p className="py-1">{children}</p>,
      img: ({ src }) => <div className="py-1"><Image src={src || null} /></div>,
    }} >{content}</Markdown>
  )
}

export default Article
