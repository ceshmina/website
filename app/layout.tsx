import type { Metadata } from 'next'
import { Open_Sans, Josefin_Slab } from 'next/font/google'
import './globals.css'

const mainFont = Open_Sans({ subsets: ['latin'], weight: ["300", "500"] })
export const titleFont = Josefin_Slab({ subsets: ['latin'], weight: ["700"] })

export const metadata: Metadata = {
  title: 'ceshmina'
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}

export default RootLayout
