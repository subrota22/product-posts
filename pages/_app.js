
import Head from 'next/head'
import Layout from '../Components/Layouts/Layouts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="shortcut icon" href="https://i.ibb.co/LSD1zwg/product-logo.png" type="image/x-icon" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp
