'use client'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

const SidebarSlide = ({ children }: { children: React.ReactNode }) => { 
  const [isOpen, setOpen] = useState(false)
  const open = () => { setOpen(true) }
  const close = () => { setOpen(false) }
  return (
    <Menu right isOpen={isOpen} onOpen={open} onClose={close}>
      <div className="pb-32" onClick={close}>{children}</div>
    </Menu>
  )
}

export default SidebarSlide
