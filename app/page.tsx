import Link from 'next/link'

const Home = () => {
  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="my-8">
        <h1 className="text-2xl font-bold">ceshmina</h1>
        <p>shu's website</p>
      </section>

      <section className="my-8">
        <p className="text-sm my-1"><Link href="/diary" className="text-blue-700">日記</Link></p>
      </section>

      <section className="my-8">
        <h2 className="text-lg font-bold my-2">About</h2>
        <p className="text-sm my-1">ソフトウェアエンジニア、データサイエンティスト見習い。</p>
        <p className="text-sm my-1">
          南米の民族音楽「フォルクローレ」を演奏します。
          YAMA、グルーポ★ブラザーズ、Los Amidasなどのグループで活動しています。
        </p>

        <section className="my-6">
          <h2 className="font-bold my-2">Background</h2>
          <ul className="text-sm">
            <li className="my-1">2023年1月〜: データサイエンティスト @ 株式会社ADWAYS DEEE</li>
            <li className="my-1">2021年4月〜2022年12月: ソフトウェアエンジニア @ 株式会社アドウェイズ</li>
            <li className="my-1">
              2019年4月〜2021年3月:
              修士課程 @ 東京大学大学院理学系研究科物理学専攻 / 宇宙線研究所理論グループ
            </li>
            <li className="my-1">2017年4月〜2019年3月: 東京大学理学部物理学科</li>
            <li className="my-1">2015年4月〜2017年3月: 東京大学教養学部理科I類</li>
            <li className="my-1">2012年4月〜2015年3月: 私立東大寺学園高等学校</li>
          </ul>
        </section>
      </section>

      <section className="my-8">
        <h2 className="text-lg font-bold my-2">Links</h2>
        <ul className="text-sm">
          <li className="my-1">
            X
            (<a href="https://x.com/ceshmina" target="_blank" className="text-blue-700">@ceshmina</a>)
          </li>
          <li className="my-1">
            Instagram
            (<a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-700">@ceshmina</a>)
          </li>
          <li className="my-1">
            GitHub
            (<a href="https://github.com/ceshmina" target="_blank" className="text-blue-700">@ceshmina</a>)
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home
