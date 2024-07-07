'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'


type RandomImgConf = {
  src: string
  date: string
  alt: string
}

const images: RandomImgConf[] = [
  { src: '/cat.jpg', date: '20240308', alt: 'Chefchaouen, Morocco' },
  { src: '/men.jpg', date: '20240311', alt: 'Istanbul, Turkey' },
  { src: '/bamboo.jpg', date: '20240630', alt: 'Kyoto, Japan' }
]


export const RandomImg = () => {
  const [randomImg, setRandomImg] = useState({ src: '', date: '', alt: '' } as RandomImgConf)
  useEffect(() => {
    const top_image = images[Math.floor(Math.random() * images.length)]
    setRandomImg(top_image)
  }, [])

  return (<div>
    <img src={randomImg.src} className="w-[100%]" />
    <p className="mt-1 pr-2 text-right text-xs color-light link-hidden italic">
      <Link href={`/diary/entry/${randomImg.date}`}>{randomImg.alt}</Link>
    </p>
  </div>)
}
