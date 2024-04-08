import Link from 'next/link'

const Page = () => {
  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <h1 className="text-2xl font-bold">ceshmina</h1>
        <p className="py-1">shu&apos;s website</p>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">About</h2>
        <div className="py-2 text-sm">
          <p className="py-1">ソフトウェアエンジニア、データサイエンティスト見習い。</p>
          <p className="py-1">南米の民族風音楽「フォルクローレ」を演奏します。YAMA、グルーポ★ブラザーズ、Los Amidasというグループで活動しています。</p>
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">Contents</h2>
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-500">日記</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Page
