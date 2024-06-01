import Link from 'next/link'
import { Month, Camera, Location } from '@/core/diary/model'

type Props = {
  months: { month: Month, count: number }[]
  cameras: { camera: Camera, count: number }[]
  locations: { location: string, count: number }[]
}

const Sidebar = (props: Props) => {
  const { months, cameras, locations } = props
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
          <p key={camera.slug} className="my-1.5">
            <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name} ({count})</Link>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-sm font-medium">場所別</h2>
      <div className="my-4 text-xs text-gray-500">
        {locations.map(({ location, count }) => {
          const locSlug = Location.byName(location).slug
          return (<p key={location} className="my-1.5">
            <Link href={`/diary/location/${locSlug}`} className="text-blue-500">{location} ({count})</Link>
          </p>)
        })}
      </div>
    </div>
  )
}

export default Sidebar
