'use client'
import { useState } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { Link as Scroll } from 'react-scroll'


const Title = ({ to, onClick, children }: Readonly<{ to: string, onClick: () => void, children: React.ReactNode }>) => {
  return (
    <p className="my-2">
      <span className="link">
        <Scroll to={to} duration={300} smooth onClick={onClick}>{children}</Scroll>
      </span>
    </p>
  )
}


export const SlideNav = () => {
  const [isOpen, setOpen] = useState(false)
  const open = () => { setOpen(true) }
  const close = () => { setOpen(false) }

  return (
    <Menu right isOpen={isOpen} onOpen={open} onClose={close}>
      <div className="font-alt font-bold">
        <Title to="about" onClick={close}>ABOUT</Title>
        <Title to="works" onClick={close}>WORKS</Title>
        <Title to="blog" onClick={close}>BLOG</Title>
        <Title to="contact" onClick={close}>CONTACT</Title>
        <p className="my-8">
          <Link href="/ja"><span className="fi fi-jp"></span></Link>
          <Link href="/en"><span className="fi fi-gb ml-4"></span></Link>
        </p>
      </div>
    </Menu>
  )
}
