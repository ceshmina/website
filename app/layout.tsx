import { Bitter, Noto_Sans_JP, Josefin_Slab, Sono } from 'next/font/google'

import { Footer } from '@/components/common/footer'

import './burger.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import './zoom.css'
import './globals.css'


const mainFont = Bitter({ subsets: ['latin'], weight: ['300', '500'], variable: '--font-main' })
const mainJPFont = Noto_Sans_JP({ subsets: ['latin'], weight: ['300', '500'], variable: '--font-jp' })
const altFont = Josefin_Slab({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-alt' })
const monoFont = Sono({ subsets: ['latin'], weight: ['300'], variable: '--font-code' })


export const metadata = {
  title: 'apkas'
}


const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <body className={`
        ${mainFont.variable} ${mainJPFont.variable} ${altFont.variable} ${monoFont.variable}
        color-main
      `}>
        {children}

        <div className="mt-12 color-anti py-8">
          <div className="content-main">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout
