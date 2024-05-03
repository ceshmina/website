import Link from 'next/link'
import { Month, Camera } from '@/core/diary/model'

type Props = {
  months: { month: Month, count: number }[]
  cameras: { camera: Camera, count: number }[]
}

const Sidebar = (props: Props) => {
  const { months, cameras } = props
  return (
    <div>
      <h2 className="text-sm font-bold">月別</h2>
      <div className="my-4 text-sm text-gray-500">
        {months.map(({ month, count }) =>
          <p key={month.slug} className="my-1.5">
            <Link href={`/diary/month/${month.slug}`} className="text-blue-500">{month.name} ({count})</Link>
          </p>
        )}
      </div>

      <h2 className="mt-8 text-sm font-bold">撮影機材別</h2>
      <p className="my-4 text-xs text-gray-500">
        {cameras.map(({ camera, count }) =>
          <span key={camera.slug} className="inline-block mr-2 my-1 border-2 border-gray-300 px-1 py-0.5 rounded">
            <Link href={`/diary/camera/${camera.slug}`} className="text-blue-500">{camera.name} ({count})</Link>
          </span>
        )}
      </p>
    </div>
  )
}

export default Sidebar
