import Link from 'next/link'
import { FaMusic } from 'react-icons/fa6'
import { Spotify, AppleMusic, AmazonMusic } from '@/components/works/musiclink'
import { AltFont } from '@/components/styled'
import Events from '@/components/works/events'

export const Works = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (
    <section id="works">
        <h2 className="text-lg font-bold"><AltFont>WORKS</AltFont></h2>
        <div className="my-8">
          <div className="my-4 flex justify-between align-bottom border-b-2 border-gray-700">
            <p className="pl-1 pt-1 font-medium">Ambivalencia</p>
            <p className="text-sm font-bold px-4 py-1 border-2 border-gray-700 mb-[-2px] text-gray-100 bg-gray-700">
              <AltFont>2022&nbsp;/&nbsp;<FaMusic className="inline mt-[-2px] pb-[2px] mr-1" />ALBUM</AltFont>
            </p>
          </div>
          <div className="flex items-start">
            <img src="/ambivalencia.webp" className="max-w-[30%] py-1" />
            <div className="text-xs pl-4">
              {lang === 'ja' ?
                <p className="py-1">西田フレンズとしての2ndアルバム。オンライン・コスキンで初披露した「Espiral」、リーダー・西田のボリビアへの想いを込めた「Para Ti Lejos」など、全11曲を収録。</p> :
                <p className="py-1">The second album by Nishida Friends. It includes 11 tracks, such as &quot;Espiral,&quot; which was first performed at the Online Cosquín, and &quot;Para Ti Lejos,&quot; a song that reflects the leader Nishida&apos;s feelings towards Bolivia.</p>
              }
              {lang === 'ja' ?
                <p className="py-1">11曲中6曲を作曲。サンポーニャとギターを中心に演奏した他、全編のレコーディング・ミキシング・マスタリングを担当した。</p> :
                <p className="py-1">Out of the 11 tracks, I composed 6. In addition to playing the zampoñas and guitar, I was responsible for the recording, mixing, and mastering of the entire album.</p>
              }
              <p className="pt-2 pb-1">{lang === 'ja' ? '各種音楽サブスクサービスにて配信中' : 'Available on various music streaming services'}:</p>
              <p className="leading-6">
                <Link href="https://open.spotify.com/intl-ja/album/1s3ObF3GkmBId0ZbXMkro4" target="_blank">
                  <Spotify />
                </Link>
                <Link href="https://music.apple.com/jp/album/ambivalencia/1658982598" target="_blank">
                  <AppleMusic />
                </Link>
                <Link href="https://www.amazon.co.jp/music/player/albums/B0BPM6RZ5R?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211" target="_blank">
                  <AmazonMusic />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="my-4 flex justify-between align-bottom border-b-2 border-gray-700">
            <p className="pl-1 pt-1 font-medium">Aventura</p>
            <p className="text-sm font-bold px-4 py-1 border-2 border-gray-700 mb-[-2px] text-gray-100 bg-gray-700">
              <AltFont>2021&nbsp;/&nbsp;<FaMusic className="inline mt-[-2px] pb-[2px] mr-1" />ALBUM</AltFont>
            </p>
          </div>
          <div className="flex items-start">
            <img src="/aventura.webp" className="max-w-[30%] py-1" />
            <div className="text-xs pl-4">
              {lang === 'ja' ? 
                <p className="py-1">西田フレンズの記念すべき1stアルバム。リーダー作曲の初めてのオリジナル曲「Tren de Aventura」、ライブで好評の「El Horizonte」などインスト7曲を収録。</p> :
                <p className="py-1">The landmark 1st album by Nishida Friends. It includes 7 instrumental tracks, such as the leader&apos;s first original composition &quot;Tren de Aventura&quot; and the popular live performance piece &quot;El Horizonte.&quot;</p>
              }
              {lang === 'ja' ?
                <p className="py-1">うち3曲を作曲、全編でサンポーニャとギターを中心に演奏している。メンバー2名で分担し、レコーディング・ミキシング・マスタリングを実施。</p> :
                <p className="py-1">I composed 3 of the tracks and primarily played the zampoñas and guitar throughout the album. The recording, mixing, and mastering were carried out by two members.</p>
              }
              <p className="pt-2 pb-1">{lang === 'ja' ? '各種音楽サブスクサービスにて配信中' : 'Available on various music streaming services'}:</p>
              <p className="leading-6">
                <Link href="https://open.spotify.com/intl-ja/album/44Dv1jcm8ZgwBxiZhyVCxZ" target="_blank">
                  <Spotify />
                </Link>
                <Link href="https://music.apple.com/jp/album/aventura/1553005052" target="_blank">
                  <AppleMusic />
                </Link>
                <Link href="https://www.amazon.co.jp/music/player/albums/B08WC2Z716?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211" target="_blank">
                  <AmazonMusic />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-bold pt-2 pb-4"><AltFont>RECENT EVENTS</AltFont></h3>
        <Events />
      </section>
  )
}
