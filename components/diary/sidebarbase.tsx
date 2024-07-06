import { FaCalendarDays, FaCamera, FaLocationDot } from 'react-icons/fa6'
import { IoMdPhotos } from 'react-icons/io'
import { DiaryCollection } from '@/core/model/diary'
import { Link, ContraLink, AltFont } from '@/components/styled'


const SidebarBase = async (props: { theme: 'light' | 'dark' } = { theme: 'light' }) => {
  const diaries = await DiaryCollection.fetch()
  const months = diaries.aggByMonth()
  const cameras = diaries.aggByCameras()
  const locations = diaries.aggByLocation()

  const { theme } = props
  const LinkComp = theme === 'light' ? Link : ContraLink

  return (
    <div>
      <h2 className="text-xs font-bold">
        <FaCalendarDays className="inline mr-1 pb-[1px]" /><AltFont>MONTHLY</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {months.map(({ month, count }) =>
          <p key={month.slug} className="my-1.5">
            <LinkComp href={`/diary/month/${month.slug}`}>{month.name} ({count})</LinkComp>
          </p>
        )}
      </div>


      <h2 className="mt-8 text-xs font-bold">
        <FaCamera className="inline mr-1 pb-[1px]" /><AltFont>CAMERA</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {cameras.map(({ camera, count }) =>
          <p key={camera} className="my-1.5">
            <LinkComp href={`/diary/camera/${camera}`}>{camera} ({count})</LinkComp>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-xs font-bold">
        <FaLocationDot className="inline mr-1 pb-[1px]" /><AltFont>LOCATION</AltFont>
      </h2>
      <div className="my-4 text-xs text-gray-500">
        {locations.map(({ location, count }) => {
          return (<p key={location} className="my-1.5">
            <LinkComp href={`/diary/location/${location}`}>{location} ({count})</LinkComp>
          </p>)
        })}
      </div>

      <h2 className="mt-8 text-xs font-bold">
        <LinkComp href="/diary/photos">
          <IoMdPhotos className="inline mr-1 pb-[1px]" /><AltFont>ALL PHOTOS</AltFont>
        </LinkComp>
      </h2>
    </div>
  )
}

export default SidebarBase
