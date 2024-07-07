import { AltFont, Text } from '@/components/styled'

export const Blog = (props: { lang: 'ja' | 'en' }) => {
  return (
    <section id="blog">
      <h2 className="text-lg font-bold"><AltFont>BLOG</AltFont></h2>
      <div>
        <Text>Under preparation...</Text>
      </div>
    </section>
  )
}
