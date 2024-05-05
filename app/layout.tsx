import type { Metadata } from 'next'
import { Bitter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const mainFont = Bitter({ subsets: ['latin'], weight: ["300"], variable: '--font-main' })
const mainJPFont = Noto_Sans_JP({ subsets: ['latin'], weight: ["300"], variable: '--font-jp' })

export const metadata: Metadata = {
  title: 'ceshmina'
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${mainJPFont.variable}`}>{children}</body>
      <footer className="my-8">
        <p className={`${mainFont.className} text-center text-[10px] font-light text-gray-500`}>&copy;2024 APKAS</p>
      </footer>
    </html>
  )
}

export default RootLayout
