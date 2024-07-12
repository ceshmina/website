'use client'

import { useState } from 'react'

import { type EventProps, Event } from '@/components/works/event'
import { ShowButton } from '@/components/common/button'


const events: EventProps[] = [
  { date: '20230219', title: '冬のアルスコンサート', location: 'Tsukuba', note: 'as Grupo Brothers', image: '/events/20230219.jpg' },
  { date: '20230313', title: '筑波大学フォルクローレ愛好会定期コンサート', location: 'Tsukuba', note: 'as Grupo Brothers', image: '/events/20230313.jpg' },
  { date: '20230409', title: 'アンデスの家ボリビア インストアライブ', location: 'Kodaira', note: 'as YAMA', image: '/events/20230409.jpg' },
  { date: '20230503', title: 'フォルクローレ演奏会2023 en IRIFUNE', location: 'Yokohama', note: 'as YAMA', image: '/events/20230503.jpg' },
  { date: '20230603', title: 'アンデス音楽Live', location: 'Tokyo', note: 'as Grupo Brothers', image: '/events/20230603.jpg' },
  { date: '20230618', title: '', location: 'Hachioji', note: 'as YAMA', image: '/events/20230618.jpg' },
  { date: '20230805', title: 'デイケアなんかい コンサート', location: 'Hiroshima', note: 'as YAMA', image: '/events/20230805-1.jpg'},
  { date: '20230805', title: 'MGユースホステル コンサート', location: 'Hiroshima', note: 'as YAMA', image: '/events/20230805-2.jpg'},
  { date: '20230806', title: '原爆ピアノ アオギリ平和コンサート', location: 'Hiroshima', note: 'as YAMA', image: '/events/20230806-1.jpg'},
  { date: '20230806', title: 'きっちんたまがわ コンサート', location: 'Hiroshima', note: 'as YAMA', image: '/events/20230806-2.jpg'},
  { date: '20230811', title: 'COSQUIN en JAPON 2023', location: 'Kawamata', note: 'as Grupo Brothers', image: '/events/20230811.jpg' },
  { date: '20230812', title: 'COSQUIN en JAPON 2023 (サブステージ)', location: 'Kawamata', note: 'as YAMA', image: '/events/20230812.jpg' },
  { date: '20231028', title: 'フォルク人達', location: 'Kunitachi', note: 'as YAMA/with アシタバ', image: '/events/20231028.jpg' },
  { date: '20231104', title: 'マチュピチュ・エン・ハポン2023', location: 'Iwakuni', note: 'as YAMA', image: '/events/20231104.jpg' },
  { date: '20231105', title: 'アンデスの響きコンサート', location: 'Yamaguchi', note: 'as YAMA/with MAYA, Raul Olarte', image: '/events/20231105.jpg' },
  { date: '20231125', title: '三田祭', location: 'Yokohama', note: 'support', image: '/events/20231125.jpg' },
  { date: '20240217', title: '冬のアルスコンサート', location: 'Tsukuba', note: 'as Grupo Brothers', image: '/events/20240217.jpg' },
  { date: '20240225', title: 'ワールドミュージックフェスタ', location: 'Yokohama', note: 'as Grupo Brothers', image: '/events/20240225.jpg' },
  { date: '20240421', title: 'ホセ犬伏『再会のサンバ』リリース記念フォルクローレコンサート', location: 'Tachikawa', note: 'support', image: '/events/20240421.jpg' },
  { date: '20240428', title: 'フォルクローレ演奏会2024 en IRIFUNE', location: 'Yokohama', note: 'as YAMA', image: '/events/20240428.jpg' },
  { date: '20240506', title: '水道橋フォルクローレライブ春', location: 'Tokyo', note: 'as Grupo Brothers/with tapaTunes', image: '/events/20240506.jpg' },
  { date: '20240519', title: '第27回三木山フォルクローレ音楽祭', location: 'Miki', image: '/events/20240519.jpg' },
  { date: '20240525', title: '', location: 'Hamura', note: 'as Los Amidas/with ショルヘーノ, すずきかのん, 多賀文音', image: '/events/20240525.jpg' },
  { date: '20240602', title: '', location: 'Sodegaura', note: 'as Grupo Brothers', image: '/events/20240602.jpg' },
  { date: '20240629', title: '第2回京都フォルクローレ街角ステージ', location: 'Kyoto', image: '/events/20240629.jpg' }
]


export const Events = () => {
  const minNShow = 6
  const maxNShow = events.length
  const [nShow, setNShow] = useState(minNShow)
  const showMore = () => setNShow(maxNShow)
  const showLess = () => setNShow(minNShow)

  return (
    <div className="mt-4">
      <h3 className="mt-12 font-bold font-alt">RECENT EVENTS</h3>
      <div className="mt-2 flex flex-wrap justify-between">
        {events.slice().reverse().slice(0, nShow).map((p, i) => (
          <Event key={i} event={p} />
        ))}
      </div>
      {nShow === minNShow ? (
        <p className="text-center mt-4">
          <ShowButton text="SHOW MORE" className="color-sub button-sub" onClick={showMore} />
        </p>
      ) : (
        <p className="text-center mt-4">
          <ShowButton text="SHOW LESS" className="color-sub button-sub" onClick={showLess} />
        </p>
      )}
    </div>
  )
}
