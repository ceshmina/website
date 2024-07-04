'use client'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

const Navigation = () => {
  return <div className="text-right">
    <p className={`${EN_TITLE_FONT.className} text-sm font-bold my-1`}>
      <span className="mr-4"><Scroll to="about" duration={300} smooth>ABOUT</Scroll></span>
      <span><Scroll to="works" duration={300} smooth>WORKS</Scroll></span>
    </p>
    <p className="my-1">
      <span className="w-4 h-4 fi fi-jp mr-4"></span>
      <span className="fi fi-gb"></span>
    </p>
  </div>
}

export default Navigation
