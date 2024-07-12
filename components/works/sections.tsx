import { FaSpotify } from 'react-icons/fa'
import { SiApplemusic, SiAmazonmusic } from 'react-icons/si'

import { type AlbumProps, Album } from './album'


const albums: AlbumProps[] = [
  {
    title: 'Aventura',
    year: '2021',
    descriptionJa: `
西田フレンズの記念すべき1stアルバム。リーダー作曲の初めてのオリジナル曲「Tren de Aventura」、ライブで好評の「El Horizonte」などインスト7曲を収録。

うち3曲を作曲、全編でサンポーニャとギターを中心に演奏している。メンバー2名で分担し、レコーディング・ミキシング・マスタリングを実施。
`,
    descriptionEn: `
The landmark 1st album by Nishida Friends. It includes 7 instrumental tracks, such as the leader's first original composition "Tren de Aventura" and the popular live performance piece "El Horizonte."

I composed 3 of the tracks and primarily played the zampoñas and guitar throughout the album. The recording, mixing, and mastering were carried out by two members.
`,
    img: '/aventura.webp',
    links: [
      { title: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/intl-ja/album/44Dv1jcm8ZgwBxiZhyVCxZ' },
      { title: 'Apple Music', icon: SiApplemusic, url: 'https://music.apple.com/jp/album/aventura/1553005052' },
      { title: 'Amazon Music', icon: SiAmazonmusic, url: 'https://www.amazon.co.jp/music/player/albums/B08WC2Z716?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211' }
    ]
  },
  {
    title: 'Ambivalencia',
    year: '2022',
    descriptionJa: `
西田フレンズとしての2ndアルバム。オンライン・コスキンで初披露した「Espiral」、リーダー・西田のボリビアへの想いを込めた「Para Ti Lejos」など、全11曲を収録。

11曲中6曲を作曲。サンポーニャとギターを中心に演奏した他、全編のレコーディング・ミキシング・マスタリングを担当した。
`,
    descriptionEn: `
The second album by Nishida Friends. It includes 11 tracks, such as "Espiral," which was first performed at the Online Cosquín, and "Para Ti Lejos," a song that reflects the leader Nishida's feelings towards Bolivia.

Out of the 11 tracks, I composed 6. In addition to playing the zampoñas and guitar, I was responsible for the recording, mixing, and mastering of the entire album.
`,
    img: '/ambivalencia.webp',
    links: [
      { title: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/intl-ja/album/1s3ObF3GkmBId0ZbXMkro4' },
      { title: 'Apple Music', icon: SiApplemusic, url: 'https://music.apple.com/jp/album/ambivalencia/1658982598' },
      { title: 'Amazon Music', icon: SiAmazonmusic, url: 'https://www.amazon.co.jp/music/player/albums/B0BPM6RZ5R?&_encoding=UTF8&tag=tcjaz-22&linkCode=ur2&camp=247&creative=1211' }
    ]
  }
]

export const Works = (props: { lang: 'ja' | 'en' }) => {
  const { lang } = props
  return (
    <section id="works">
      <h2 className="text-lg font-bold font-alt">WORKS</h2>
      {albums.slice().reverse().map((album, i) => (
        <Album key={i} {...album} lang={lang} />
      ))}
    </section>
  )
}
