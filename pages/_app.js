// import '../styles/globals.css'
// bootstrap npm package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import "../public/assets/css/flaticon.css";
import "../public/assets/css/line-awesome.min.css";

// import "../public/assets/css/fancybox.min.css";

import "../public/assets/css/style.css";
import "../public/assets/css/mobile.css";
import "../public/assets/css/custom.css";
import "../public/assets/css/404.css";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Script 
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
      id="my-script-2"  
       strategy="lazyOnload">
         {`
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
          });    
         `}
       </Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
