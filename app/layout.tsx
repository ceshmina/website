import type { Metadata } from 'next'
import { Bitter, Noto_Sans_JP, Sono } from 'next/font/google'
import './zoom.css'
import './burger.css'
import './globals.css'

const mainFont = Bitter({ subsets: ['latin'], weight: ["300", "500"], variable: '--font-main' })
const mainJPFont = Noto_Sans_JP({ subsets: ['latin'], weight: ["300", "500"], variable: '--font-jp' })
const monoFont = Sono({ subsets: ['latin'], weight: ["300"], variable: '--font-code' })

export const metadata: Metadata = {
  title: 'ceshmina'
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${mainJPFont.variable} ${monoFont.variable}`}>{children}</body>
      <footer className="my-8">
        <p className={`${mainFont.className} text-center text-[10px] font-light text-gray-500`}>&copy;2024 APKAS</p>
      </footer>
    </html>
  )
}

export default RootLayout
