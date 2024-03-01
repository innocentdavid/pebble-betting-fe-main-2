import React, { useRef, useState } from "react";
import Game1 from "/images/Game1.svg";
import Game2 from "/images/Game2.svg";
import Game3 from "/images/Game3.svg";
import Game4 from "/images/Game4.svg";
import Cat2 from "/images/Cat2.svg";
import Cat3 from "/images/Cat3.svg";
import Cat4 from "/images/Cat4.svg";
import Cat5 from "/images/Cat5.svg";
import fee from "/images/fee.svg";
import Lock from "/images/Lock.svg";
import Nft from "/images/Nft.svg";
import Search from "/images/Search.png";
import { CiSearch } from "react-icons/ci";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import "../Slots/styles.css";

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
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-start">
              <img
                src={Game1}
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#929EA6]  text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img src={Lock} alt="Lock" className="pr-[10px]" />
              </div>
              <p
                className="text-[#6B7280] text-[12px] mt-2 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Casino
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-start">
              <img
                src={Game2}
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#929EA6]  text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <img src={Lock} alt="Lock" className="pr-[10px]" />
              </div>
              <p
                className="text-[#6B7280] text-[12px] mt-2 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Gaming
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-start">
              <img
                src={Game3}
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex justify-between items-center w-full mt-3">
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#929EA6]  text-[7px] ml-2 font-[600]">
                    Entry fee:
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={fee}
                      alt="fee"
                      width={6}
                      height={5}
                      className="w-[1px] "
                    />
                    <p className="text-[5px] text-[#B1B6C6]">25</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Lock} alt="Lock" className="p" />
                  <img src={Nft} alt="Lock" className="" />
                </div>
              </div>
              <p
                className="text-[#6B7280] text-[12px] mt-2 ml-1 font-[600]
             bg-[#20222580]/50 text-center px-[4px] py-[1px]"
              >
                Gaming
              </p>
            </div>
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
              <p className="text-[#929EA6] text-[7px] ml-4  mt-2 font-[600]">
                Free
              </p>
              <p className="text-[#6B7280] text-[12px] mt-2 ml-3 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                Animal Stream
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-start">
              <img
                src={Game4}
                alt=""
                className="rounded-[4px] object-contain relative"
              />
              <p
                className="absolute top-[2.19px] rounded-[1px] left-[2.2px] 
uppercase text-[#0EE520] bg-black text-[8px] px-[2px] py-[1px]"
              >
                Live
              </p>
              <div className="flex bottom-[23%] right-0 justify-center gap-[2px] items-center pr-[2px] absolute">
                {/* <img src={Search} alt="SEARCH" width={10} height={10} className="w-[10px] h-[10px]" />  */}
                <CiSearch className="text-[17px] font-bold text-[#B1B6C6]" /> 
                <p className="text-[#B1B6C6] font-[600] font-sans text-[10px] ">Browse</p>
              </div>
            <div className="flex items-center w-full justify-between mt-2">
            <p className="text-[#929EA6] text-[7px] ml-2   font-[600]">
                Free
              </p>
              <img src={Nft} alt="" />
            </div>
              <p className="text-[#6B7280] text-[12px] mt-2 ml-1 font-[600] bg-[#20222580]/50 text-center px-[4px] py-[1px]">
                AR Gaming
              </p>
            </div>
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
