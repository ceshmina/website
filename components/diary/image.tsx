import { getCamerasByImgUrl, getMetaDataByImgUrl } from '@/core/diary/retrieve'
import ImageView from '@/components/diary/imageview'

const Image = async (props: { src: string | null, alt: string, title?: string, showMetaData? : boolean }) => {
  const { src, alt, title, showMetaData } = props
  if (!src) return null

  const cameras = await getCamerasByImgUrl(src)
  const { focalLength, focalLength35, fNumber, exposureTime, isoSpeedRatings } = await getMetaDataByImgUrl(src)

  let cameraCaption = cameras.map(c => c.name).join(', ')
  if (showMetaData) {
    const isIPhone = cameraCaption.includes('iPhone')
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

  return <ImageView src={src} alt={alt} title={title} caption={cameraCaption} />
}

export default Image
