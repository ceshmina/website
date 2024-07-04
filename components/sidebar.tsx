'use client'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link as Scroll } from 'react-scroll'
import { EN_TITLE_FONT } from '@/config'

const SideBar = () => {
  const [isOpen, setOpen] = useState(false)
  const open = () => { setOpen(true) }
  const close = () => { setOpen(false) }
  return (<Menu right isOpen={isOpen} onOpen={open} onClose={close}>
    <div className={`${EN_TITLE_FONT.className} font-bold my-1`}>
      <p className="my-2"><Scroll to="about" duration={300} smooth onClick={close}>ABOUT</Scroll></p>
      <p className="my-2"><Scroll to="works" duration={300} smooth onClick={close}>WORKS</Scroll></p>
      <p className="my-2">BLOG</p>
      <p className="my-2">CONTACT</p>
      <p className="my-6">
        <span className="fi fi-jp mr-4"></span>
        <span className="fi fi-gb"></span>
      </p>
    </div>
  </Menu>)
}

export default SideBar
