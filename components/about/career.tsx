import Markdown from 'react-markdown'

import { Period } from './period'


const CareerTitle = (props: { career: string, company: string }) => {
  const { career, company } = props
  return (
    <p>
      <span className="font-medium">{career}</span>
      &nbsp;/&nbsp;
      <span>{company}</span>
    </p>
  )
}


export const CareerCard = (props: { period: string, career: string, company: string, description: string, keywords: string[] }) => {
  const { period, career, company, description, keywords } = props
  return (
    <div className="py-2">
      <div className="flex items-center">
        <Period text={period} />
        <CareerTitle career={career} company={company} />
      </div>
      <div className="mt-4">
        <Markdown components={{
          p: ({ node, children, ...props }) => <p className="text-xs my-1" {...props}>{children}</p>
        }}>
          {description}
        </Markdown>
        <p className="text-xs my-2">
          <span className="font-medium">Keywords:</span>&nbsp;
          {keywords.join(', ')}
        </p>
      </div>
    </div>
  )
}
