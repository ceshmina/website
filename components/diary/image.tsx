import { getCamerasByImgUrl } from "@/core/diary/retrieve"

const Image = async (props: { src: string | null }) => {
  const { src } = props
  if (!src) return null

  const cameras = await getCamerasByImgUrl(src)
  return (<>
    <img src={src} className="py-1" />
    <p className="text-xs text-gray-500 italic">
      {cameras.map(c => c.name).join(' / ')}
    </p>
  </>)
}

export default Image
