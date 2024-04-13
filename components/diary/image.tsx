import { getExifByImgUrl } from "@/core/diary/retrieve"

const Image = async (props: { src: string | null }) => {
  const { src } = props
  if (!src) return null

  const exif = await getExifByImgUrl(src)
  return (<>
    <img src={src} className="py-1" />
    <p className="text-xs text-gray-500 italic">{exif.showCamera}</p>
  </>)
}

export default Image
