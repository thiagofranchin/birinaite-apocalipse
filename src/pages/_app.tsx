import Head from 'next/head'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Birinaite Apocalipse | Peça o seu CD Agora</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
