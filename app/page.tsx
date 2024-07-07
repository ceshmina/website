import { About, Career } from '@/components/about/sections'
import { Works } from '@/components/works/sections'
import { Blog } from '@/components/blog/sections'
import { Contact } from '@/components/contact/sections'
import { HeaderNav } from '@/components/navigation'
import { SlideNav } from '@/components/navigation/client'
import { RandomImg } from '@/components/misc/client'


export const Page = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props

  return (<>
    <div className="md:hidden">
      <SlideNav />
    </div>

    <main className="pt-4">
      <div className="content-main mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img src="/icon.png" className="w-12" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-alt font-bold">APKAS</h1>
            <p className="font-alt">SHU/CESHMINA</p>
          </div>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>

      <div className="content-main-img mt-8 px-0">
        <RandomImg />
      </div>

      <div className="content-main mt-8">
        <About lang={lang} />
      </div>
      <div className="mt-8 color-anti py-8">
        <div className="content-border md:border-2 border-anti pt-4 pb-8">
          <Career lang={lang} />
        </div>
      </div>

      <div className="content-main mt-12">
        <Works lang={lang} />
      </div>

      <div className="mt-12 color-sub py-8">
        <div className="content-border md:border-2 border-sub pt-4 pb-8">
          <Blog lang={lang} />
        </div>
      </div>

      <div className="content-main mt-12 mb-16">
        <Contact lang={lang} />
      </div>
    </main>
  </>)
}

const PageJa = () => <Page lang="ja" />
export default PageJa
