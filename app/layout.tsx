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
      <body className={`${mainFont.variable} ${mainJPFont.variable} ${altFont.variable} ${monoFont.variable}`}>
        {children}

        <div className="mt-12 bg-gray-800 py-8">
          <div className="max-w-[800px] mx-auto px-4 md:px-0 text-gray-100">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout
