import type { Metadata } from 'next'
import Link from 'next/link'
import { Bitter, Noto_Sans_JP, Sono } from 'next/font/google'
import { EN_TITLE_FONT } from '@/config'
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6'
import { PiNotebookFill } from 'react-icons/pi'
import { MdHome } from 'react-icons/md'

import './zoom.css'
import './burger.css'
import './globals.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const mainFont = Bitter({ subsets: ['latin'], weight: ["300", "500"], variable: '--font-main' })
const mainJPFont = Noto_Sans_JP({ subsets: ['latin'], weight: ["300", "500"], variable: '--font-jp' })
const monoFont = Sono({ subsets: ['latin'], weight: ["300"], variable: '--font-code' })

export const metadata: Metadata = {
  title: 'ceshmina'
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${mainJPFont.variable} ${monoFont.variable} ${EN_TITLE_FONT.variable}`}>{children}</body>

      <footer className={`${mainFont.className} font-light mt-12 pt-8 pb-2 text-gray-100 bg-gray-800`}>
        <div className="max-w-[800px] mx-auto px-4 md:px-1 flex">
          <div className="py-1 md:ml-[-4px] text-xs pr-8 md:pr-4 border-r-[1px] border-gray-300">
            <p className="py-0.5 md:inline">
              <FaXTwitter className="inline pb-[1px]" /> <a href="https://x.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
            <p className="py-0.5 md:inline md:pl-4">
              <FaInstagram className="inline pb-[1px]" /> <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
            <p className="py-0.5 md:inline md:pl-4">
              <FaGithub className="inline pb-[1px]" /> <a href="https://github.com/ceshmina" target="_blank" className="text-blue-300">ceshmina</a>
            </p>
          </div>

          <div className="py-1 pl-8 md:pl-4 text-xs">
            <p className="py-0.5 md:inline">
              <MdHome className="inline pb-[1.5px] text-sm" /> <Link href="/" className="text-blue-300">apkas.net</Link>
            </p>  
            <p className="py-0.5 md:inline md:pl-4">
              <PiNotebookFill className="inline pb-[1.5px] text-sm" /> <Link href="/diary" className="text-blue-300">diary</Link>
            </p>
          </div>
        </div>

        <div className="max-w-[800px] px-4 md:px-0 pt-4 pb-8 mx-auto">
          <p className="text-[10px] text-gray-300">&copy;2024 APKAS</p>
        </div>
      </footer>
    </html>
  )
}

export default RootLayout
