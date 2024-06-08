'use client'
import { useState } from 'react'

const ImageThumbnail = (props: { src: string, largeSrc: string, diaryLink: string, diaryTitle: string }) => {
  const { src, largeSrc, diaryLink, diaryTitle } = props
  if (!src) return null

  const [isZoom, setIsZoom] = useState(false)
  const toggleZoom = () => {
    setIsZoom(!isZoom)
  }

  return (<div>
    <img onClick={toggleZoom} src={src} loading="lazy" />
    {isZoom && <div onClick={toggleZoom} className="fixed inset-0 w-[100%] h-[100%] bg-black bg-opacity-80">
      <div className="absolute top-[50%] left-[50%] w-[100%] h-[100%] translate-x-[-50%] translate-y-[-50%]">
        <img src={largeSrc} loading="lazy" className="mx-auto my-auto max-w-[100%] max-h-[100%]" />
      </div>
    </div>}
  </div>)
}

export default ImageThumbnail
