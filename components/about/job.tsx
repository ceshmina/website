import Period from './period'
import JobTitle from './jobtitle'
import { SmallContraText, Bold } from '../styled'

const Job = (props: { period: string, job: string, company: string, description: string[], keywords: string[] }) => {
  const { period, job, company, description, keywords } = props
  return (<div>
    <div className="py-4 flex items-center">
      <Period text={period} />
      <JobTitle job={job} company={company} />
    </div>
    <div className="pb-4">
      {description.map((d, i) => (<SmallContraText key={i}>{d}</SmallContraText>))}
      <div className="h-1" />
      <SmallContraText>
        <Bold>Keywords:</Bold> {keywords.join(', ')}
      </SmallContraText>
    </div>
  </div>)
}

export default Job
