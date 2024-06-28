import Link from 'next/link'

import { DiaryCollection } from '@/core/model/diary'


const Sidebar = async () => {
  const diaries = await DiaryCollection.fetch()
  const months = diaries.aggByMonth()
  const cameras = diaries.aggByCameras()
  const locations = diaries.aggByLocation()

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


      <h2 className="mt-8 text-sm font-medium">撮影機材別</h2>
      <div className="my-4 text-xs text-gray-500">
        {cameras.map(({ camera, count }) =>
          <p key={camera} className="my-1.5">
            <Link href={`/diary/camera/${camera}`} className="text-blue-500">{camera} ({count})</Link>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-sm font-medium">場所別</h2>
      <div className="my-4 text-xs text-gray-500">
        {locations.map(({ location, count }) => {
          return (<p key={location} className="my-1.5">
            <Link href={`/diary/location/${location}`} className="text-blue-500">{location} ({count})</Link>
          </p>)
        })}
      </div>

      <h2 className="mt-8 text-sm font-medium">
        <Link href="/diary/photos" className="text-blue-500">Photos</Link>
      </h2>
    </div>
  )
}

export default Sidebar
