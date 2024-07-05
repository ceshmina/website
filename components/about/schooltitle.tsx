const SchoolTitle = (props: { program?: string, school: string }) => {
  const { program, school } = props
  return (
    <p className="text-sm">
      {program && <><span className="font-medium">{program}</span>, </>}
      <span>{school}</span>
    </p>
  )
}

export default SchoolTitle
