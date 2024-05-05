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
      <footer className="my-8">
        <p className={`${mainFont.className} text-center text-[10px] font-light text-gray-500`}>&copy;2024 APKAS</p>
      </footer>
    </html>
  )
}

export default RootLayout
