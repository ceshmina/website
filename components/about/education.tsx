import { Period } from './button'


const EducationTitle = (props: { program?: string, school: string }) => {
  const { program, school } = props
  return (
    <p className="text-sm">
      {program && <>
        <span className="font-medium">{program}</span>,&nbsp;
      </>}
      <span>{school}</span>
    </p>
  )
}


export const EducationCard = (props: { period: string, program?: string, school: string }) => {
  const { period, program, school } = props
  return (
    <div className="py-2">
      <div className="flex items-center">
        <Period text={period} />
        <EducationTitle program={program} school={school} />
      </div>
    </div>
  )
}
