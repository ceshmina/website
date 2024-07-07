import Link from 'next/link'

import { IconType } from 'react-icons'
import { MdHome } from 'react-icons/md'
import { PiNotebookFill } from 'react-icons/pi'
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6'


const InnerLink = ({ href, icon, children }: Readonly<{ href: string, icon: IconType, children: React.ReactNode }>) => {
  const Icon = icon
  return (
    <span>
      <Icon className="text-sm inline-block mr-1" />
      <Link href={href} className="anti-link">{children}</Link>
    </span> 
  )
}

const OuterLink = ({ href, icon, children }: Readonly<{ href: string, icon: IconType, children: React.ReactNode }>) => {
  const Icon = icon
  return (
    <span>
      <Icon className="text-xs inline-block mr-1" />
      <Link href={href} target="_blank" className="anti-link">{children}</Link>
    </span> 
  )
}


export const Footer = () => {
  return (
    <footer>
      <div className="text-xs flex">
        <div>
          <p className="my-2 md:my-1 md:inline-block">
            <InnerLink href="/" icon={MdHome}>apkas.net</InnerLink>
          </p>
          <p className="my-2 md:my-1 md:inline-block md:ml-4">
            <InnerLink href="/diary" icon={PiNotebookFill}>diary</InnerLink>
          </p>
        </div>

        <div className="ml-8 md:ml-6 border-l-[1px] border-anti pl-8 md:pl-6">
          <p className="my-2 md:my-1 md:inline-block">
            <OuterLink href="https://x.com/ceshmina" icon={FaXTwitter}>ceshmina</OuterLink>
          </p>
          <p className="my-2 md:my-1 md:inline-block md:ml-4">
            <OuterLink href="https://instagram.com/ceshmina" icon={FaInstagram}>ceshmina</OuterLink>
          </p>
          <p className="my-2 md:my-1 md:inline-block md:ml-4">
            <OuterLink href="https://github.com/ceshmina" icon={FaGithub}>ceshmina</OuterLink>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[10px] contra-light-color">&copy;2024 APKAS</p>
      </div>
    </footer>
  )
}
