import '../styles/globals.css'
import Head from "next/head";
import screenWidth from '../hooks/windowSize'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={'title'}>Ecommerce Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A website restaurant for online presense"
        />

      </Head>
      <div className="overflow-x-hidden">
        <Navbar />

        <Component {...pageProps} />
        <Footer />
        
      </div>
    </>
  )
}


export default MyApp
