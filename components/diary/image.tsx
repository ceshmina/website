import { ImageUrl } from '@/core/diary/model'
import { getCamerasByImageUrl, getMetaDataByImageUrl } from '@/core/diary/retrieve'
import ImageView from '@/components/diary/imageview'

const Image = async (props: {
  src: string | null,
  alt: string,
  title?: string,
  showMetaData? : boolean,
  useAltAsCaption?: boolean
}) => {
  const { src, alt, title, showMetaData, useAltAsCaption } = props
  if (!src) return null

  const imageUrl = new ImageUrl(src)
  const caption = (useAltAsCaption ? alt : title) || ''

  const cameras = await getCamerasByImageUrl(imageUrl)
  const { focalLength, focalLength35, fNumber, exposureTime, isoSpeedRatings } = await getMetaDataByImageUrl(imageUrl)

  let cameraCaption = cameras.map(c => c.name).join(', ')
  if (showMetaData) {
    const isIPhone = cameraCaption.includes('iPhone')
    const isPixel = cameraCaption.includes('Pixel')
    if (!(isIPhone || isPixel)) {
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

  return <ImageView src={src} caption={caption} cameraCaption={cameraCaption} />
}

export default Image
