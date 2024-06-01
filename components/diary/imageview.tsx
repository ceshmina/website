'use client'
import { useState, useLayoutEffect } from 'react'
import Zoom from 'react-medium-image-zoom'

const ZoomContent = ({ buttonUnzoom, modalState, img }: {
  buttonUnzoom: React.ReactElement<HTMLButtonElement>,
  modalState: string,  // ModalState
  img: React.ReactElement | null
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    if (modalState === 'LOADED') {
      setIsLoaded(true)
    } else if (modalState === 'UNLOADING') {
      setIsLoaded(false)
    }
  }, [modalState])

  const classCaption = isLoaded
    ? 'zoom-caption zoom-caption--loaded'
    : 'zoom-caption'

  return <div>
    {buttonUnzoom}
    <figure>
      {img}
      <figcaption className={`${classCaption} text-sm`}>
      </figcaption>
    </figure>
  </div>
}

const ImageView = (props: { src: string | null, alt: string, title?: string, caption?: string }) => {
  const { src, alt, title, caption } = props
  if (!src) return null

  return (<div>
    <Zoom ZoomContent={ZoomContent}>
      <img src={src} alt={alt} title={title} />
      <div className="pt-1">
        {title && <p className="text-xs text-gray-500 italic">{title}</p>}
        {caption && <p className="text-xs text-gray-500 italic">{caption}</p>}
      </div>
    </Zoom>
  </div>)
}

export default ImageView
