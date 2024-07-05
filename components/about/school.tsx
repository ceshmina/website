import Period from './period'
import SchoolTitle from './schooltitle'

const School = (props: { period: string, job: string, school: string }) => {
  const { period, job, school } = props
  return (<div>
    <div className="py-2 flex items-center">
      <Period text={period} />
      <SchoolTitle program={job} school={school} />
    </div>
  </div>)
}

export default School
