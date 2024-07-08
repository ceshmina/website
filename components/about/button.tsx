export const Period = (props: { text: string }) => {
  const { text } = props
  return (
    <p className={`
      w-[120px] min-w-[120px] sm:w-[172px] sm:min-w-[172px] 
      px-4 pt-1 pb-0.5 rounded-full mr-4
      color-main text-sm font-alt font-bold text-center
    `}>
      {text}
    </p>
  )
}

export const ShowButton = (props: { text: string, onClick: () => void }) => {
  const { text, onClick } = props
  return (
    <button onClick={onClick} className={`
      w-[160px] min-w-[160px] 
      px-4 pt-1 pb-0.5 mr-4
      color-main button-main text-xs font-alt font-bold text-center
    `}>
      {text}
    </button>
  )
}
