"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
//@ts-ignore
import { Navigation } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

// Video sources for each slide - replace with your actual videos
const slideVideos = [
  "/media/videos/hero/hypecave-bg.mp4",
  "/media/videos/hero/hypecave-bg.mp4",
  "/media/videos/hero/hypecave-bg.mp4",
  "/media/videos/hero/hypecave-bg.mp4",
];

const Banner = () => {
  return (
    // <!--banner section-->
    <section className="banner__v1 banner__space mr-24 ml-24">
      <div className="container-fluid p-0">
        <div className="row g-4">
          <div className="col-lg-7 col-md-7">
            <div className="swiper mySwiper22">
              <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="swiper-wrapper"
              >
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center banner__slide--video">
                  <video
                    className="slide-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={slideVideos[0]} type="video/mp4" />
                  </video>
                  <div className="slide-video-overlay"></div>
                  <div className="banner__content">
                    <h1 className="mb-24">
                      The Hype Cave Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="watch" className="cmn--btn"><span>Watch Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center banner__slide--video">
                  <video
                    className="slide-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={slideVideos[1]} type="video/mp4" />
                  </video>
                  <div className="slide-video-overlay"></div>
                  <div className="banner__content">
                    <h1 className="mb-24">
                      The Hype Cave Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="watch" className="cmn--btn"><span>Watch Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center banner__slide--video">
                  <video
                    className="slide-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={slideVideos[2]} type="video/mp4" />
                  </video>
                  <div className="slide-video-overlay"></div>
                  <div className="banner__content">
                    <h1 className="mb-24">
                      The Hype Cave Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="watch" className="cmn--btn"><span>Watch Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center banner__slide--video">
                  <video
                    className="slide-video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={slideVideos[3]} type="video/mp4" />
                  </video>
                  <div className="slide-video-overlay"></div>
                  <div className="banner__content">
                    <h1 className="mb-24">
                      The Hype Cave Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="watch" className="cmn--btn"><span>Watch Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="bn__navigationnew gap-1 d-flex align-items-center">
                <div className="swiper-button-next">
                  <IconChevronLeft />
                </div>
                <div className="swiper-button-prev">
                  <IconChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <a 
              href="https://underthesunrs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="side__thumbs__custom d-block sponsor-ad-wrapper"
            >
              <span className="sponsor-badge">Sponsored</span>
              <Image
                width={700}
                height={520}
                src="/media/images/sponsors/under-the-sun-roofing.jpg"
                alt="Under The Sun Roofing & Solar - Sponsor"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    //<!--banner section-->
  );
};

export default Banner;
