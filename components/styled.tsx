import styled from 'tailwind-styled-components'
import { EN_TITLE_FONT } from '@/config'

// texts
export const Text = styled.p`
  text-sm
  text-gray-800
  my-1.5
`
export const SmallContraText = styled.p`
  text-xs
  text-white
  my-1
`

// text markups
export const Bold = styled.span`
  font-medium
`
export const AltFont = ({ children }: { children: React.ReactNode }) => {
  return <span className={EN_TITLE_FONT.className}>{children}</span>
}
export const Code = styled.code`
  text-[13px]
  my-1.5
`

// text logics
export const OuterLink = (props: { href: string, children: React.ReactNode }) => {
  const { href, children } = props
  return <a href={href} target="_blank" className="text-blue-700 hover:text-blue-500 transition">{children}</a>
}

