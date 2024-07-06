'use client'
import { slide as Menu } from 'react-burger-menu'

const SidebarSlide = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu right>
      <div className="pb-32">{children}</div>
    </Menu>
  )
}

export default SidebarSlide
