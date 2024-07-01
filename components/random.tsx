'use client'
import { useState, useEffect } from 'react'

type RandomImageProps = {
  src: string
  alt: string
}

const top_images = [
  { src: '/cat.jpg', alt: 'Chefchaouen, Morocco' },
  { src: '/men.jpg', alt: 'Istanbul, Turkey' },
  { src: '/bamboo.jpg', alt: 'Kyoto, Japan' }
]

const RandomImage = () => {
  const [randomImage, setRandomImage] = useState({ src: '', alt: '' } as RandomImageProps)
  useEffect(() => {
    const top_image = top_images[Math.floor(Math.random() * top_images.length)]
    setRandomImage(top_image)
  }, [])
  return (<>
    <img src={randomImage.src} className="w-[100%]" />
    <p className="text-right text-xs text-gray-500 italic py-1 pr-4 md:pr-1">{randomImage.alt}</p>
  </>)
}

export default RandomImage
