import Link from 'next/link'
import { parse, format } from 'date-fns'
import { AltFont } from '@/components/styled'


export type EventProps = {
  date: string
  title: string
  location: string
  note?: string
  image?: string
}

export const Event = (props: { event: EventProps }) => {
  const { event } = props
  const d = format(parse(event.date, 'yyyyMMdd', new Date()), 'MMM d, yyyy').toUpperCase()
  return (
    <div className="w-[100%] sm:w-[49%] my-2 inline-block border-[1px] border-gray-300 hover:bg-gray-200 transition duration-300 rounded-[8px] overflow-hidden p-0">
      <Link href={`/diary/entry/${event.date}`}>
        <div className="flex justify-between">
          <div className="px-2 py-1">
            <p className="text-xs font-bold"><AltFont>{d}</AltFont></p>
            <p className="text-sm font-bold leading-4 pb-1 font-medium">{event.title}</p>
            <p className="text-xs text-gray-700">{event.location}{event.location && event.note && ', '}{event.note}</p>
          </div>
          <img src={event.image || '/events/20240629.jpg'} className="max-w-[20%] " />
        </div>
      </Link>
    </div>
  )
}
