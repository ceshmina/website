import { FaSpotify } from 'react-icons/fa'
import { SiApplemusic, SiAmazonmusic } from 'react-icons/si'

const Base = ({ children }: { children: React.ReactNode }) => {
  return (<span className="inline-block font-medium bg-gray-700 hover:bg-gray-500 transition duraiton-300 text-white mr-1 px-2 my-0.5 rounded-full">
    {children}
  </span>)
}

export const Spotify = () => <Base>Spotify <FaSpotify className="inline pb-[1px]" /></Base>
export const AppleMusic = () => <Base>Apple Music <SiApplemusic className="inline pb-[1px]" /></Base>
export const AmazonMusic = () => <Base>Amazon Music <SiAmazonmusic className="inline pb-[1px]" /></Base>
