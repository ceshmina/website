'use client'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'


const Title = ({ to, children }: Readonly<{ to: string, children: React.ReactNode }>) => {
  return (
    <span className="ml-4 link">
      <Scroll to={to} duration={300} smooth>{children}</Scroll>
    </span>
  )
}


export const HeaderNav = () => {
  return (
    <div className="hidden md:block text-right">
      <p className="my-1 text-sm font-alt font-bold">
        <Title to="about">ABOUT</Title>
        <Title to="works">WORKS</Title>
        <Title to="blog">BLOG</Title>
        <Title to="contact">CONTACT</Title>
      </p>
      <p className="my-1">
        <Link href="/ja"><span className="fi fi-jp ml-4 hover:drop-shadow-lg"></span></Link>
        <Link href="/en"><span className="fi fi-gb ml-4 hover:drop-shadow-lg"></span></Link>
      </p>
    </div>
  )
}
