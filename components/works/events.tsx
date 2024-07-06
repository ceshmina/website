'use client'
import { useState } from 'react'
import { performances } from '@/data/static'
import EventCard from './eventcard'
import { Text } from '@/components/styled'

const Events = () => {
  const minNShow = 6
  const maxNShow = performances.length
  const [nShow, setNShow] = useState(minNShow)
  const showMore = () => setNShow(maxNShow)
  const showLess = () => setNShow(6)

  return (<div>
    <div className="flex flex-wrap justify-between">
      {performances.sort((a, b) => parseInt(b.date) - parseInt(a.date)).slice(0, nShow).map((p, i) => (
        <EventCard key={i} event={p} />
      ))}
    </div>
    {nShow === minNShow && <Text className="text-right text-blue-700 mr-2" onClick={showMore}>Show more</Text>}
    {nShow === maxNShow && <Text className="text-right text-blue-700 mr-2" onClick={showLess}>Show less</Text>}
  </div>)
}

export default Events
