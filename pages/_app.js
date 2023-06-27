
import Head from 'next/head'
import Layout from '../Components/Layouts/Layouts'
import '../styles/globals.css'
import React from 'react'
import Aos from 'aos';

function MyApp({ Component, pageProps }) {
//aos scroll animation
React.useEffect(()=>{
Aos.init({
  duration:2000,
});
}, []); 

  return <>
  <Head>
  <link rel="shortcut icon" href="https://i.ibb.co/LSD1zwg/product-logo.png" type="image/x-icon" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  </Head>
  <div id="mainDiv">
  <Layout>

   <Component {...pageProps} />
  
  </Layout>
  </div>
  </>
}

export default MyApp
