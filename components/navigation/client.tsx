'use client'
import { useState } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

export const SlideNav = () => {
  const [isOpen, setOpen] = useState(false)
  const open = () => { setOpen(true) }
  const close = () => { setOpen(false) }
  return (<Menu right isOpen={isOpen} onOpen={open} onClose={close}>
    <div className={`${EN_TITLE_FONT.className} font-bold my-1`}>
      <p className="my-2"><Scroll to="about" duration={300} smooth onClick={close}>ABOUT</Scroll></p>
      <p className="my-2"><Scroll to="works" duration={300} smooth onClick={close}>WORKS</Scroll></p>
      <p className="my-2"><Scroll to="blog" duration={300} smooth onClick={close}>BLOG</Scroll></p>
      <p className="my-2"><Scroll to="contact" duration={300} smooth onClick={close}>CONTACT</Scroll></p>
      <p className="my-6">
        <Link href="/ja"><span className="fi fi-jp mr-4"></span></Link>
        <Link href="/en"><span className="fi fi-gb"></span></Link>
      </p>
    </div>
  </Menu>)
}
