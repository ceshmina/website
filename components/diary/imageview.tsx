'use client'
import { ReactElement, useMemo } from 'react'
import { useState, useLayoutEffect } from 'react'
import Zoom from 'react-medium-image-zoom'

const cx = (mods: Record<string, boolean>): string => {
  const cns: string[] = []
  for (const k in mods) {
    if (mods[k]) {
      cns.push(k)
    }
  }
  return cns.join(' ')
}

const ImageView = (props: { src: string | null, alt: string, title?: string, caption?: string }) => {
  const { src, alt, title, caption } = props
  if (!src) return null

  const ZoomContent = ({ buttonUnzoom, modalState, img }: {
    buttonUnzoom: React.ReactElement<HTMLButtonElement>,
    modalState: string,  // ModalState
    img: React.ReactElement | null
  }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const imgProps = (img as ReactElement<HTMLImageElement>)?.props
    const imgWidth = imgProps?.width
    const imgHeight = imgProps?.height

    const classCaption = useMemo(() => {
      const hasWidthHeight = imgWidth != null && imgHeight != null
      const imgRatioLargerThanWindow =
        imgWidth / imgHeight > window.innerWidth / window.innerHeight

      return cx({
        'zoom-caption': true,
        'zoom-caption--loaded': isLoaded,
        'zoom-caption--bottom': hasWidthHeight && imgRatioLargerThanWindow,
        'zoom-caption--left': hasWidthHeight && !imgRatioLargerThanWindow,
      })
    }, [imgWidth, imgHeight, isLoaded])

    useLayoutEffect(() => {
      if (modalState === 'LOADED') {
        setIsLoaded(true)
      } else if (modalState === 'UNLOADING') {
        setIsLoaded(false)
      }
    }, [modalState])

    return <div>
      {buttonUnzoom}
      <figure>
        {img}
        <figcaption className={`${classCaption} text-center text-xs text-gray-100`}>
          {caption}
        </figcaption>
      </figure>
    </div>
  }

  return (<div>
    <Zoom ZoomContent={ZoomContent} zoomMargin={16}>
      <img src={src} alt={alt} title={title} loading='lazy' />
      <div className="pt-1">
        {title && <p className="text-xs text-gray-500 italic">{title}</p>}
      </div>
    </Zoom>
  </div>)
}

export default ImageView
