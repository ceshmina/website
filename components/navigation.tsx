'use client'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

const Navigation = () => {
  return <p className={`${EN_TITLE_FONT.className} text-sm font-bold`}>
    <span className="mr-4"><Scroll to="about" duration={300} smooth>ABOUT</Scroll></span>
    <span><Scroll to="works" duration={300} smooth>WORKS</Scroll></span>
  </p>
}

export default Navigation
