import React, { useRef, useState }  from 'react'
import Music from '/images/music.svg'
import Cat1 from '/images/Cat1.svg'
import Cat2 from '/images/Cat2.svg'
import Cat3 from '/images/Cat3.svg'
import Cat4 from '/images/Cat4.svg'
import Cat5 from '/images/Cat5.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// import '../sedona/styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const sedona = () => {
  return (
    <div className='w-full h-auto mx-auto flex flex-col'>
<div className="flex items-center w-full gap-2 mb-6">
    <img src={Music} alt="Music" className=''/>
    <h1 className="text-[#FFFFFF] text-[16px] font-[700] uppercase">Sedona live</h1>
    <p className="text-[16px] text-[#DFFE00] font-[600] font-sans ">All</p>
</div>
<div className="flex items-center w-full overflow-hidden space-x-4">
{/* <img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" />
<img src={Cat1} alt="" className="rounded-[4px]" /> */}
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
        <img src={Cat4} alt="" className="rounded-[4px] object-contain" />
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
  )
}

export default sedona