import Markdown from 'react-markdown'

const Article = (props: { content: string }) => {
  const { content } = props
  return (
    <Markdown components={{
      p: ({ children }) => <p className="py-1">{children}</p>,
      img: ({ src }) => <img src={src} className="py-1" />,
    }} >{content}</Markdown>
  )
}

export default Article
