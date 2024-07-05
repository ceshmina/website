import Period from './period'
import JobTitle from './jobtitle'

const Job = (props: { period: string, job: string, company: string, description: string[], keywords: string[] }) => {
  const { period, job, company, description, keywords } = props
  return (<div>
    <div className="py-4 flex items-center">
      <Period text={period} />
      <JobTitle job={job} company={company} />
    </div>
    <div className="pb-4 text-xs text-gray-100">
      {description.map((d, i) => (<p className="py-1" key={i}>{d}</p>))}
      <p className="py-2">
        <span className="font-medium">Keywords: </span>
        {keywords.join(', ')}
      </p>
    </div>
  </div>)
}

export default Job
