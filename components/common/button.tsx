export const ShowButton = (props: { text: string, className?: string, onClick: () => void }) => {
  const { text, className, onClick } = props
  return (
    <button onClick={onClick} className={`
      w-[160px] min-w-[160px] 
      px-4 pt-1 pb-0.5 mr-4
      text-xs font-alt font-bold text-center
      ${className}
    `}>
      {text}
    </button>
  )
}
