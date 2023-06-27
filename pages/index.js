import Head from 'next/head'
import HomePage from '../Components/Home/HomePage'
export default function Home() {
  return (
    <>
      <Head>
        <title> Home page </title>
        <meta name="description" content="This is product post website" />
        <meta name="keywords" content="post, product" />
        <link rel="shortcut icon" href="https://i.ibb.co/LSD1zwg/product-logo.png" type="image/x-icon" />
      </Head>
      <>
        <HomePage></HomePage>
      </>

    </>
  )
}
