import Link from 'next/link'
import { getDiaries } from '@/core/diary/retrieve'
import { aggByMonth, aggByLocation, aggCameras } from '@/core/diary/aggregate'
import { Location } from '@/core/diary/model'

import { DiaryCollection } from '@/core/model/diary'

const Sidebar = async () => {
  const diaries = await DiaryCollection.fetch()
  const months = diaries.aggByMonth()
  // const locations = aggByLocation(diaries.items)
  // const cameras = await aggCameras(diaries.items)
  return (
    <div>
      <h2 className="text-sm font-medium">月別</h2>
      <div className="my-4 text-xs text-gray-500">
        {months.map(({ month, count }) =>
          <p key={month.slug} className="my-1.5">
            <Link href={`/diary/month/${month.slug}`} className="text-blue-500">{month.name} ({count})</Link>
          </p>
        )}
      </div>


      {/*
      <h2 className="mt-8 text-sm font-medium">撮影機材別</h2>
      <div className="my-4 text-xs text-gray-500">
        {cameras.map(({ camera, count }) =>
          <p key={camera.slug} className="my-1.5">
            <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name} ({count})</Link>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-sm font-medium">場所別</h2>
      <div className="my-4 text-xs text-gray-500">
        {locations.map(({ location, count }) => {
          const locSlug = new Location(location).slug
          return (<p key={location} className="my-1.5">
            <Link href={`/diary/location/${locSlug}`} className="text-blue-500">{location} ({count})</Link>
          </p>)
        })}
      </div>
      */}

      <h2 className="mt-8 text-sm font-medium">
        <Link href="/diary/photos" className="text-blue-500">Photos</Link>
      </h2>
    </div>
  )
}

export default Sidebar
