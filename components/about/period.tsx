import { EN_TITLE_FONT } from '@/config'

const Period = (props: { text: string }) => {
  const { text } = props
  return (
    <p className={`
      ${EN_TITLE_FONT.className}
      w-[120px] sm:w-[172px] text-sm text-gray-900 font-bold text-center
      bg-gray-100 px-4 pt-1 pb-0.5 rounded-full mr-4
    `}>
      {text}
    </p>
  )
}

export default Period
