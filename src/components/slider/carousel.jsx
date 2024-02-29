import React, { useRef, useState } from 'react';
import carousel1 from "/images/Carousel.svg";
import carousel2 from "/images/Dale.svg";
import Baby from "/images/baby.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Loop } from '@mui/icons-material';

export default function CarouselComp() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide>      
       <div className="flex-1 min-h-[300px] relative flex">
          <div className="bg-[#00000066]/40 w-full absolute h-full"></div>
          <div className="w-full h-full">
            <img
              src={carousel1}
              alt="Carousel"
              className="w-full h-full mx-0  my-[32px] "
            />
          </div>
        <div className="">
        <p className="text-[#DFFE00CC]/80 text-[18px] uppercase  top-[64px] left-[41px] absolute">
            {" "}
            SIGN IN AND WATCH CK REEDEEM HIMSELF
          </p>
          <p className="text-[#DFFE00CC]/80 text-[18px] uppercase top-[94px] left-[41px] absolute">
            {" "}
           REEDEEM HIMSELF
          </p>
        </div>
          <img src={Baby} alt="Baby" className="absolute  left-[47px] top-[120px]" />
        </div>
        </SwiperSlide>
       
        <SwiperSlide> 
            <div className="flex-1 min-h-[300px] relative flex">
          <div className="bg-[#00000066]/40 w-full absolute h-full"></div>
          <div className="w-full h-full">
            <img
              src={carousel2}
              alt="Carousel"
              className="w-full h-full mx-0  my-[32px] "
            />
          </div>
        <div className="">
        <p className="text-[#DFFE00CC]/80 text-[18px] uppercase  top-[64px] left-[41px] absolute">
            {" "}
            Enjoy world of Live stream betting
          </p>
          <p className="text-[#DFFE00CC]/80 text-[18px] uppercase top-[94px] left-[41px] absolute">
            {" "}
           Your favorite marble awaits you
          </p>
        </div>
          <img src={Baby} alt="Baby" className="absolute  left-[47px] top-[120px]" />
        </div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
