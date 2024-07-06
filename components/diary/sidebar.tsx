// import Link from 'next/link'
import { FaCalendarDays, FaCamera, FaLocationDot } from 'react-icons/fa6'
import { IoMdPhotos } from 'react-icons/io'
import { DiaryCollection } from '@/core/model/diary'
import { Link, AltFont } from '@/components/styled'


const Sidebar = async () => {
  const diaries = await DiaryCollection.fetch()
  const months = diaries.aggByMonth()
  const cameras = diaries.aggByCameras()
  const locations = diaries.aggByLocation()

  return (
    <div className="md:ml-4 px-2 pt-4 pb-12 bg-gray-200 rounded-[12px]">
      <h2 className="text-xs font-bold">
        <FaCalendarDays className="inline mr-1 pb-[1px]" /><AltFont>MONTHLY</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {months.map(({ month, count }) =>
          <p key={month.slug} className="my-1.5">
            <Link href={`/diary/month/${month.slug}`}>{month.name} ({count})</Link>
          </p>
        )}
      </div>


      <h2 className="mt-8 text-xs font-bold">
        <FaCamera className="inline mr-1 pb-[1px]" /><AltFont>CAMERA</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {cameras.map(({ camera, count }) =>
          <p key={camera} className="my-1.5">
            <Link href={`/diary/camera/${camera}`}>{camera} ({count})</Link>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-xs font-bold">
        <FaLocationDot className="inline mr-1 pb-[1px]" /><AltFont>LOCATION</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {locations.map(({ location, count }) => {
          return (<p key={location} className="my-1.5">
            <Link href={`/diary/location/${location}`}>{location} ({count})</Link>
          </p>)
        })}
      </div>

      <h2 className="mt-8 text-xs font-bold">
        <Link href="/diary/photos">
          <IoMdPhotos className="inline mr-1 pb-[1px]" /><AltFont>ALL PHOTOS</AltFont>
        </Link>
      </h2>
    </div>
  )
}

export default Sidebar
