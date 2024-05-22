import { getCamerasByImgUrl, getMetaDataByImgUrl } from "@/core/diary/retrieve"
import { isIP } from "net"

const Image = async (props: { src: string | null, showMetaData? : boolean }) => {
  const { src, showMetaData } = props
  if (!src) return null

  const cameras = await getCamerasByImgUrl(src)
  const { focalLength, focalLength35, fNumber, exposureTime, isoSpeedRatings } = await getMetaDataByImgUrl(src)

  let cameraCaption = cameras.map(c => c.name).join(', ')
  if (showMetaData) {
    const isIPhone = cameraCaption.includes('iPhone')
    if (isIPhone && focalLength35) {
      cameraCaption += ` - ${focalLength35}mm`
    }
    if (!isIPhone) {
      const metaData: string[] = []
      if (focalLength && focalLength != focalLength35) {
        metaData.push(`${focalLength} (${focalLength35}) mm`)
      } else if (focalLength) {
        metaData.push(`${focalLength}mm`)
      }
      if (fNumber) {
        metaData.push(`F${fNumber}`)
      }
      if (exposureTime) {
        const exposureTimeStr = `1/${1 / Number(exposureTime)}`
        metaData.push(`${exposureTimeStr}s`)
      }
      if (isoSpeedRatings) {
        metaData.push(`ISO${isoSpeedRatings}`)
      }
      cameraCaption += metaData.length ? ` - ${metaData.join(', ')}` : ''
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
