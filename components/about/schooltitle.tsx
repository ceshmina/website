const SchoolTitle = (props: { program?: string, school: string }) => {
  const { program, school } = props
  return (
    <p className="text-sm">
      {program && <><span className="font-bold">{program}</span>&nbsp;/&nbsp;</>}
      <span>{school}</span>
    </p>
  )
}

export default SchoolTitle
