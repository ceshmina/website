const JobTitle = (props: { job: string, company: string }) => {
  const { job, company } = props
  return (
    <p>
      <span className="font-bold">{job}</span>&nbsp;
      /&nbsp;<span>{company}</span>
    </p>
  )
}

export default JobTitle
