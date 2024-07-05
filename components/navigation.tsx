'use client'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

const Title = (props: { to: string, text: string}) => {
  const { to, text } = props
  return (
    <span className="ml-4 cursor-pointer hover:text-gray-500 transition">
      <Scroll to={to} duration={300} smooth>{text}</Scroll>
    </span>
  )
}

const Navigation = () => {
  return (
    <div className="text-right hidden md:block">
      <p className={`${EN_TITLE_FONT.className} text-sm font-bold my-1`}>
        <Title to="about" text="ABOUT" />
        <Title to="works" text="WORKS" />
        <Title to="blog" text="BLOG" />
        <Title to="contact" text="CONTACT" />
      </p>
      <p className="my-1">
        <Link href="/ja"><span className="fi fi-jp mr-4"></span></Link>
        <Link href="/en"><span className="fi fi-gb"></span></Link>
      </p>
    </div>
  )
}

export default Navigation
