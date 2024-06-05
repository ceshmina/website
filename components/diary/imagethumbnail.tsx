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

const ImageThumbnail = (props: { src: string, largeSrc: string, diaryLink: string, diaryTitle: string }) => {
  const { src, largeSrc, diaryLink, diaryTitle } = props
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
        <figcaption className={classCaption}>
          <a href={diaryLink} className='text-blue-500'>{diaryTitle}</a>
        </figcaption>
      </figure>
    </div>
  }

  return (<div>
    <Zoom ZoomContent={ZoomContent} zoomImg={{ alt: '', src: largeSrc }}>
      <img src={src} loading='lazy' />
    </Zoom>
  </div>)
}

export default ImageThumbnail
