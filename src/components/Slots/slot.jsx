import React, { useRef, useState } from "react";
import Cat1 from "/images/Cat1.svg";
import Cat2 from "/images/Cat2.svg";
import Cat3 from "/images/Cat3.svg";
import Cat4 from "/images/Cat4.svg";
import Cat5 from "/images/Cat5.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Slots/styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const slot = () => {
  return (
    <div className="w-full h-auto mx-auto flex flex-col">
      <div className="flex items-center w-full gap-6 mb-4">
        <button className="rounded-[4px] uppercase text-[16px] text-[#030303] font-[600] py-4 px-[40px] bg-[#DFFE00]">
          all
        </button>
        <button className="rounded-[4px] uppercase text-[16px] text-[#DFFE00] font-[600] py-4 px-[40px] bg-[#52545A40]/25">
          PUBLIC
        </button>
        <button className="rounded-[4px] uppercase text-[16px] text-[#DFFE00] font-[600] py-4 px-[40px] bg-[#52545A40]/25">
          Private
        </button>
      </div>

      <div className="flex items-center w-full mt-8 overflow-hidden space-x-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Cat1} alt="" className="rounded-[4px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cat2} alt="" className="rounded-[4px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cat3} alt="" className="rounded-[4px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
           <div className="flex flex-col items-start">
           <img
              src={Cat3}
              alt=""
              className="rounded-[4px] object-contain relative"
            />
            <p
              className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
            >
              Live
            </p>
            <p className="text-[#929EA6] text-[7px] ml-4  mt-2 font-[600]">Free</p>
            <p className="text-[#6B7280] text-[12px] mt-2 ml-3 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">Animal Stream</p>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cat5} alt="" className="rounded-[4px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cat2} alt="" className="rounded-[4px] object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default slot;
