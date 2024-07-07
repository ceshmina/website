import { About, Career } from '@/components/about/sections'
import { Works } from '@/components/works/sections'
import { Blog } from '@/components/blog/sections'
import { Contact } from '@/components/contact/sections'
import { HeaderNav } from '@/components/navigation'
import { SlideNav } from '@/components/navigation/client'
import { RandomImage } from '@/components/misc/client'


export const Page = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props

  return (<>
    <div className="md:hidden">
      <SlideNav />
    </div>

    <main className="mt-8 text-gray-800">
      <div className="max-w-[800px] mx-auto mt-4 px-4 md:px-1 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-alt font-bold">APKAS</h1>
          <p className="py-1 font-alt">SHU/CESHMINA</p>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-8">
        <RandomImage />
      </div>

      <div className="max-w-[800px] mx-auto mt-8 px-4 md:px-0">
        <About lang={lang} />
      </div>
      <div className="mt-8 bg-gray-800 py-8">
        <div className="max-w-[840px] mx-auto pt-4 pb-8 px-4 text-gray-100 md:border-2 border-gray-300">
          <Career lang={lang} />
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-12 px-4 md:px-0">
        <Works lang={lang} />
      </div>

      <div className="mt-12 bg-gray-300 py-8">
        <div className="max-w-[840px] mx-auto pt-4 pb-8 px-4 md:border-2 border-gray-600">
          <Blog lang={lang} />
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-12 mb-16 px-4 md:px-0">
        <Contact lang={lang} />
      </div>
    </main>
  </>)
}

const PageJa = () => <Page lang="ja" />
export default PageJa
