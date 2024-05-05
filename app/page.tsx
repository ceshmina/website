import Link from 'next/link'

const Page = () => {
  return (
    <main className="max-w-[800px] mx-auto p-4">
      <section className="py-4">
        <h1 className="text-2xl font-bold">ceshmina</h1>
        <p className="py-1">shusuke ueda</p>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">About</h2>
        <div className="py-2 text-sm">
          <p className="py-1">Software engineer/data scientist.</p>
          <p className="py-1">
            Play Latin folk music known as &quot;folklore&quot; in Japan.
            Member of <a href="https://x.com/yamafolklore" target="_blank" className="text-blue-500">YAMA</a>
            , <a href="https://x.com/grupobrothers" target="_blank" className="text-blue-500">Grupo Brothers</a>
            , and <a href="https://x.com/StreetFolk_Amid" target="_blank" className="text-blue-500">Los Amidas</a>.
          </p>
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">Background</h2>
        <h3 className="pt-4 pb-2">Career</h3>
        <table className="text-sm text-left">
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Jan. 2023 -:</th>
            <td className="pr-1">Data scientist</td>
            <td>@ <a href="https://adways-deee.net" target="_blank" className="text-blue-500">ADWAYS DEEE Inc.</a></td>
          </tr>
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Apr. 2021 - Dec. 2022:</th>
            <td className="pr-1">Software enginner</td>
            <td>@ <a href="https://www.adways.net/en" target="_blank" className="text-blue-500">Adways Inc.</a></td>
          </tr>
        </table>

        <h3 className="pt-4 pb-2">Education</h3>
        <table className="text-sm text-left">
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Apr. 2019 - Mar. 2021:</th>
            <td className="pr-1">M.Sc. in Physics</td>
            <td>
              @ Graduate School of Science/
              <a href="https://www.icrr.u-tokyo.ac.jp/en" target="_blank" className="text-blue-500">Institute for Cosmic Ray Research</a>,
              the University of Tokyo
            </td>
          </tr>
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Apr. 2017 - Mar. 2019:</th>
            <td className="pr-1">B.Sc. in Physics</td>
            <td>@ Faculty of Science, the University of Tokyo</td>
          </tr>
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Apr. 2015 - Mar. 2017:</th>
            <td className="pr-1">B.Sc. in Physics</td>
            <td>@ College of Arts and Science, the University of Tokyo</td>
          </tr>
          <tr className="align-text-top">
            <th className="py-0.5 pr-2 font-normal">Apr. 2012 - Mar. 2015:</th>
            <td className="pr-1"></td>
            <td>Todaiji Gakuen High School</td>
          </tr>
        </table>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">Links</h2>
        <div className="py-2 text-sm">
          <p className="py-1">X <a href="https://x.com/ceshmina" target="_blank" className="text-blue-500">@ceshmina</a></p>
          <p className="py-1">Instagram <a href="https://instagram.com/ceshmina" target="_blank" className="text-blue-500">@ceshmina</a></p>
          <p className="py-1">GitHub <a href="https://github.com/ceshmina" target="_blank" className="text-blue-500">@ceshmina</a></p>
        </div>
      </section>

      <section className="py-4">
        <h2 className="text-lg font-bold">Contents</h2>
        <div className="py-2 text-sm">
          <p><Link href="/diary" className="text-blue-500">Diary</Link> (in Japanese)</p>
        </div>
      </section>
    </main>
  )
}

export default Page
