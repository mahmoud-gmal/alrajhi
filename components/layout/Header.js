import Image from "next/image";

import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";


const Header = () => {

  if (typeof window !== "undefined") {
    document.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 50) {
        document.querySelector("header.moved").classList.add("active");
      } else {
        document.querySelector("header.moved").classList.remove("active");
      }
    });
  
    //Menu Toggle Btn
    document
      .querySelector(".mobile-nav-toggler")
      .addEventListener("click", function () {
        document.querySelector("body").classList.add("mobile-menu-visible");
      });
  
    //Menu Toggle Btn
    document
      .querySelector(".mobile-menu .menu-backdrop")
      .addEventListener("click", function () {
        document.querySelector("body").classList.remove("mobile-menu-visible");
      });
  
    //Menu Toggle close btn
    document
      .querySelector(".mobile-menu .close-btn")
      .addEventListener("click", function () {
        document.querySelector("body").classList.remove("mobile-menu-visible");
      });
  }

  // console.log(props);
  const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    fetch('https://safwa-tech.com/wp-json/acf/v3/options/options')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // setLoading(false)
      })
  }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>
// console.log(data)

  const router = useRouter();


  return (
    <>
      <header className="moved header-defult">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="menu-right-top">
                <ul>
                  <li>
                    <Link href="mailto:Sales@safwa_tech.com">
                      <a>
                        <span>Sales@safwa_tech.com</span>
                        <i className="flaticon-telegram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://goo.gl/maps/2ETRn3WcaSzB2F6U7">
                      <a>
                        <span>جدة_البغدادية الشرقية_شارع المدارس</span>
                        <i className="flaticon-pin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-right-bottom">
                <ul>
                  <li>
                    <Link href="/"><a className={router.pathname == "/" ? "active" : ""}> الرئيسية</a></Link>
                  </li>
                  <li>
                    <Link href="/works"><a className={router.pathname == "/works" ? "active" : ""}>أعمالنا</a></Link>
                  </li>
                  <li>
                    <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>من نحن</a></Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-sm-12">
              <Link href="/">
                <a className="logo">
                  <Image
                    alt="logo"
                    src="/assets/images/logo.png"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </a>
              </Link>
              <div className="resp-menu">
                <div className="mobile-nav-toggler">
                  <i className="flaticon-menu"></i>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <div className="menu-left-top">
                <div className="callNow">
                  <Link href="tel:0564047086">
                    <a>
                      <i className="flaticon-phone-call"></i>
                      <span> 0564047086</span>
                    </a>
                  </Link>
                </div>
                <div className="socialMedia">
                  <Link
                    href="https://twitter.com/safwatechco"
                    target="_blank"
                    passHref
                  >
                    <a>
                      <i className="flaticon-twitter"></i>
                    </a>
                  </Link>
                  <Link
                    href="https://www.instagram.com/safwatechco/"
                    target="_blank"
                    passHref
                  >
                    <a>
                      <i className="flaticon-instagram"></i>
                    </a>
                  </Link>
                  <Link
                    href="https://www.facebook.com/SafwaTechCo"
                    target="_blank"
                    passHref
                  >
                    <a>
                      <i className="flaticon-facebook"></i>
                    </a>
                  </Link>
                </div>
                <div className="maroufTop">
                  <Image
                    alt="2030"
                    src="/assets/images/2030.png"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="menu-right-bottom">
                <ul>
                  <li>
                    <Link href="/services"><a className={router.pathname == "/services" ? "active" : ""}>خدماتنا</a></Link>
                  </li>
                  <li>
                    <Link href="/blog"><a className={router.pathname == "/blog" ? "active" : ""}>المدونة</a></Link>
                  </li>
                  <li>
                    <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>تواصل معنا</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <nav className="menu-box">
          <div className="nav-title">
            <h3>القائمة</h3>
            <div className="close-btn">
              <span className="fa fa-times"></span>
            </div>
          </div>
          <div className="menu-outer">
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li>
                  <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>الرئيسية</a></Link>
                </li>
                <li>
                  <Link href="/works"><a className={router.pathname == "/works" ? "active" : ""}>أعمالنا</a></Link>
                </li>
                <li>
                  <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>من نحن</a></Link>
                </li>

                <li>
                  <Link href="/services"><a className={router.pathname == "/services" ? "active" : ""}>خدماتنا</a></Link>
                </li>
                <li>
                  <Link href="/blog"><a className={router.pathname == "/blog" ? "active" : ""}>المدونة</a></Link>
                </li>
                <li>
                  <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>تواصل معنا</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
