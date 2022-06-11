
import Image from "next/image";
import Meta from "../components/Meta";
import Link from "next/link";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/core";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

import "odometer/themes/odometer-theme-default.css";
import dynamic from "next/dynamic";
const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

// if (typeof window !== "undefined") {

//   }


export default function Home() {


  return (
    <>
    <Meta title="AlRajhi Real Estate"/>
      <main className="main-content">
        <section className="slider-h">


        <Swiper
      className="home-slider"
      spaceBetween={0}
      pagination={{ clickable: true }}
      slidesPerView={1}
      // autoplay={{ delay: 3000 }}
    >

          <SwiperSlide className="item">
            <div className="slider-block">
                <div className="img-overlay">
                    <Image  layout="fill" src="/../public/assets/images/slider.png" alt="#" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-slider">
                                <h1>
                                    FIND YOUR <br /> PERFECT HOME
                                </h1>
                                <div className="btn-s">
                                    <Link href="#">
                                    <a className="btn">
                                        <span>Maintance</span>
                                    </a>
                                    </Link>
                                    <Link href="#">
                                    <a className="btn">
                                        <span>Rent Payment</span>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="item">
            <div className="slider-block">
                <div className="img-overlay">
                    <Image  layout="fill" src="/../public/assets/images/slider.png" alt="#" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-slider">
                                <h1>
                                    FIND YOUR <br /> PERFECT HOME
                                </h1>
                                <div className="btn-s">
                                    <Link href="#">
                                    <a className="btn">
                                        <span>Maintance</span>
                                    </a>
                                    </Link>
                                    <Link href="#">
                                    <a className="btn">
                                        <span>Rent Payment</span>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
    </Swiper>    

        <div className="slider-counter"></div>
        </section>





        <section className="about-h ">
            <div className="img-overlay">
                <Image  layout="fill"  src="/../public/assets/images/pro2.png" alt="#" />
            </div>
            <div className="container">
                <div className="row">

                    
                    <div className="col-md-5 col-sm-12">
                        <div className="img-about">
                            <div className="img wow animate__animated animate__fadeInUp">
                                <div className="clip-text" style={{backgroundImage: "url(/../assets/images/about.png)"}}>ABOUT US</div>
                            </div>
                        </div>
                    </div>
                   

                    
                    <div className="col-md-7 col-sm-12 wow animate__animated animate__fadeInUp">
                        <div className="about-block">
                            <div className="title-about">
                                <h3 className="wow animate__animated animate__fadeInUp">Since the year 1399 AH, AlRajhi Real Estate Group was established</h3>
                            </div>
                            <div className="text-about">
                                <p className="wow animate__animated animate__fadeInUp">
                                    and became a pioneer in the real estate development sector in the Kingdom of Saudi Arabia, where the group achieved great success in managing and developing real estate in several cities of the Kingdom, and it constitutes a diversity in its real estate
                                    portfolio between commercial and residential properties and the group kept pace with the continuous growth and renaissance in the sector Real estate in the Kingdom
                                </p>
                                <Link href="#"><a className="btn wow animate__animated animate__fadeInUp">
                                    <span>Know More</span>
                                    <i className="la la-long-arrow-alt-right"></i>
                                </a></Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

                <section className="projects-h hoverSec">
                    <div className="container">
                        <div className="row">
                            <div className="animation-rotate">
                                <div className="anim-inner">
                                    <h6>OUR PROJECTS</h6>
                                </div>
                            </div>

                            
                            <div className="col-md-12">
                                <div className="title title-center">
                                    <h3>OUR PROJECTS</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                </div>

                                <Swiper
            className="projects-slider"
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={3}
            // autoplay={{ delay: 3000 }}
            >

                <SwiperSlide className="item">
                    <div className="pro-block">
                        <div className="img-block">
                            <Link href="#"><a className="img">
                                <Image layout="fill" src="/../public/assets/images/pro1.png" alt="#" />
                            </a>
                            </Link>
                        </div>
                        <div className="details">
                            <h3>Sports Clubs</h3>
                            <Link href="#">
                            <a className="readMore">
                                <span>Know More</span>
                                <i className="la la-long-arrow-alt-right"></i>
                            </a>
                        </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="pro-block">
                        <div className="img-block">
                            <Link href="#"><a className="img">
                                <Image  layout="fill" src="/../public/assets/images/pro1.png" alt="#" />
                            </a>
                            </Link>
                        </div>
                        <div className="details">
                            <h3>Sports Clubs</h3>
                            <Link href="#">
                            <a className="readMore">
                                <span>Know More</span>
                                <i className="la la-long-arrow-alt-right"></i>
                            </a>
                        </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="pro-block">
                        <div className="img-block">
                            <Link href="#"><a className="img">
                                <Image  layout="fill" src="/../public/assets/images/pro1.png" alt="#" />
                            </a>
                            </Link>
                        </div>
                        <div className="details">
                            <h3>Sports Clubs</h3>
                            <Link href="#">
                            <a className="readMore">
                                <span>Know More</span>
                                <i className="la la-long-arrow-alt-right"></i>
                            </a>
                        </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> 



                    </div>
                   

                    
                    <div className="col-md-12">
                        <Link href="#"><a className="btn wow animate__animated animate__fadeInUp">
                            <span>All Projects</span>
                            <i className="la la-long-arrow-alt-right"></i>
                        </a></Link>
                    </div>
                   
                </div>
            </div>
        </section>

        <section className="counter-h">
            <div className="img-overlay">
                <Image  width="100%" height="100%" layout="responsive"  src="/../public/assets/images/bg-num.png" alt="#" />
            </div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="title">
                            <h3>Alrajh Real Estate In Numbers</h3>
                        </div>
                    </div>
                   

                    
                    <div className="col-md-3 col-sm-12">
                        <div className="count-block">
                            <h3 className="counter-item">+<span className="odometer" data-odometer-final="30"></span></h3>
                            <h6>Years of experience</h6>
                        </div>
                    </div>
                   

                    
                    <div className="col-md-3 col-sm-12">
                        <div className="count-block">
                            <h3 className="counter-item">+<span className="odometer" data-odometer-final="3000"></span></h3>
                            <h6>Units</h6>
                        </div>
                    </div>
                   

                    
                    <div className="col-md-3 col-sm-12">
                        <div className="count-block">
                            <h3 className="counter-item">+<span className="odometer" data-odometer-final="9000"></span></h3>
                            <h6>Space</h6>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

        <section className="news-h hoverThr">
            <div className="container">
                <div className="row">
                    <div className="animation-rotate">
                        <div className="anim-inner">
                            <h6>LATEST NEWS</h6>
                        </div>
                    </div>

                    
                    <div className="col-md-12">
                        <div className="title">
                            <h3>LATEST NEWS</h3>
                        </div>

                        <Swiper
                        className="news-slider"
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        slidesPerView={3}
                        // autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide className="item">
                                <div className="item">
                                    <div className="box-item">
                                        <div className="flip-box">
                                            <div className="flip-box-front text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                    <Link href="#"><a className="img">
                                                            <Image  layout="fill"  src="/../public/assets/images/n1.png" alt="#"/>
                                                        </a></Link>
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flip-box-back text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item">
                                    <div className="box-item">
                                        <div className="flip-box">
                                            <div className="flip-box-front text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                    <Link href="#"><a className="img">
                                                            <Image  layout="fill"   src="/../public/assets/images/n2.png" alt="#"/>
                                                        </a></Link>
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flip-box-back text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item">
                                    <div className="box-item">
                                        <div className="flip-box">
                                            <div className="flip-box-front text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                    <Link href="#"><a className="img">
                                                            <Image  layout="fill" src="/../public/assets/images/n1.png" alt="#"/>
                                                        </a></Link>
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flip-box-back text-center">
                                                <div className="inner color-white">
                                                    <div className="flip-box-img">
                                                        <div className="date-h">
                                                            <span>8</span>
                                                            <h3>Feb</h3>
                                                        </div>
                                                    </div>
                                                    <div className="flip-box-header">
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                                        </p>
                                                        <Link href="#"><a className="readMore">
                                                            <span>Know More</span>
                                                            <i className="la la-long-arrow-alt-right"></i>
                                                        </a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>    


                    </div>
                   
                    <div className="col-md-12">
                     <Link href="#"><a className="btn wow animate__animated animate__fadeInUp">
                            <span>All News</span>
                            <i className="la la-long-arrow-alt-right"></i>
                        </a></Link>
                    </div>
                   
                </div>
            </div>
        </section>
        
        <section className="clients-h hoverFor">
            <div className="container">
                <div className="row">
                    <div className="animation-rotate">
                        <div className="anim-inner">
                            <h6>Our Clients</h6>
                        </div>
                    </div>

                    
                    <div className="col-md-12">
                        <div className="title-clients">
                            <h3>TRUSTED BY OVER <span>+500</span> CLIENTS</h3>
                        </div>


                            <Swiper
                            className="clients-slider"
                            spaceBetween={0}
                            pagination={{ clickable: true }}
                            slidesPerView={6}
                            // autoplay={{ delay: 3000 }}
                            >

                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%"  src="/../public/assets/images/c1.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%" src="/../public/assets/images/c2.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%"  src="/../public/assets/images/c3.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%" src="/../public/assets/images/c4.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%" src="/../public/assets/images/c5.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="item">
                                        <div className="client-block">
                                            <div className="img">
                                            <Image  width="100%" height="100%"  src="/../public/assets/images/c6.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>   


                    </div>
                   
                </div>
            </div>
        </section>
        
    </main>
    </>
  )
}
