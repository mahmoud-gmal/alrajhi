// import '../styles/globals.css'
// bootstrap npm package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// import "../public/assets/css/flaticon.css";
// import "../public/assets/css/line-awesome.min.css";

// import "../public/assets/css/fancybox.min.css";

import "../public/assets/css/style.css";
import "../public/assets/css/mobile.css";


// import "../public/assets/css/custom.css";
// import "../public/assets/css/404.css";


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
