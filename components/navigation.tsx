'use client'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

const Navigation = () => {
  return (
    <div className="text-right hidden md:block">
      <p className={`${EN_TITLE_FONT.className} text-sm font-bold my-1`}>
        <span className="mr-4"><Scroll to="about" duration={300} smooth>ABOUT</Scroll></span>
        <span className="mr-4"><Scroll to="works" duration={300} smooth>WORKS</Scroll></span>
        <span className="mr-4"><Scroll to="works" duration={300} smooth>BLOG</Scroll></span>
        <span><Scroll to="works" duration={300} smooth>CONTACT</Scroll></span> 
      </p>
      <p className="my-1">
        <span className="fi fi-jp mr-4"></span>
        <span className="fi fi-gb"></span>
      </p>
    </div>
  )
}

export default Navigation
