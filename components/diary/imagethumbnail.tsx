'use client'
import { useState } from 'react'
import Link from 'next/link'

const ImageThumbnail = (props: { src: string, largeSrc: string, diaryLink: string, diaryTitle: string }) => {
  const { src, largeSrc, diaryLink, diaryTitle } = props

  const [isZoom, setIsZoom] = useState(false)
  const toggleZoom = () => {
    setIsZoom(!isZoom)
  }

  return (<div>
    <img onClick={toggleZoom} src={src} loading="lazy" />
    {isZoom && <div onClick={toggleZoom} className="fixed inset-0 w-[100%] h-[100%] bg-black bg-opacity-80">
      <div className="absolute top-[50%] left-[50%] w-[100%] h-[100%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
        <img src={largeSrc} loading="lazy" className="mx-auto my-auto max-w-[100%] max-h-[100%]" />
        <figcaption className="zoom-caption zoom-caption--loaded zoom-caption--bottom">
          <Link href={diaryLink} className="text-blue-500">{diaryTitle}</Link>より
        </figcaption>
      </div>
    </div>}
  </div>)
}

export default ImageThumbnail
