import { getCamerasByImgUrl, getMetaDataByImgUrl } from "@/core/diary/retrieve"

const Image = async (props: { src: string | null, showMetaData? : boolean }) => {
  const { src, showMetaData } = props
  if (!src) return null

  const cameras = await getCamerasByImgUrl(src)
  const { focalLength35 } = await getMetaDataByImgUrl(src)

  let cameraCaption = cameras.map(c => c.name).join(' / ')
  if (showMetaData) {
    if (cameraCaption.includes('iPhone') && focalLength35) {
      cameraCaption += ` - ${focalLength35}mm`
    }
  }

  return (<>
    <img src={src} className="py-1" />
    <p className="text-xs text-gray-500 italic">
      {cameraCaption}
    </p>
  </>)
}

export default Image
