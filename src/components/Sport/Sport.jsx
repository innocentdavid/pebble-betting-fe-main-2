import React from "react";
import Ball from "/images/ball.svg";
import Sport1 from '/images/Sport1.svg';
import Sport2 from '/images/Sport2.svg';
import Sport3 from '/images/Sport3.svg';
import Sport4 from '/images/Sport4.svg'
const Sport = () => {
  return (
    <div className="w-full h-auto mx-auto flex flex-col mt-[40px]">
      <div className="flex items-center w-full gap-2 mb-6">
        <img src={Ball} alt="Music" className="" />
        <h1 className="text-[#FFFFFF] text-[16px] font-[700] uppercase">
          Sport
        </h1>
        <p className="text-[16px] text-[#DFFE00] font-[600] font-sans ">
          All Sports
        </p>
        <p className="text-[10px] text-[#DFFE0061]/40 font-[600] font-sans ml-4 ">
          COMING SOON
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center my-4 gap-1">
        <div className="max-w-[207px] w-full h-auto flex flex-col items-center pb-[22px] rounded-b-[12px] border-solid border-b-2 border-[#DFFE00] justify-center">
            <img src={Sport1} alt="Sport1" />
            <p className="mt-[7px] py-[8px] text-[14px] text-[#FFFFFFCC]/80">LIVE SPORTS</p>
        </div>
        <div className="max-w-[207px] w-full h-auto flex flex-col items-center pb-[22px] rounded-b-[12px] border-solid border-b-2 border-[#DFFE00] justify-center">
            <img src={Sport2} alt="Sport1" />
            <p className="mt-[7px] py-[8px] text-[14px] text-[#FFFFFFCC]/80">SOCCER</p>
        </div>
        <div className="max-w-[207px] w-full h-auto flex flex-col items-center pb-[22px] rounded-b-[12px] border-solid border-b-2 border-[#DFFE00] justify-center">
            <img src={Sport3} alt="Sport1" />
            <p className="mt-[7px] py-[8px] text-[14px] text-[#FFFFFFCC]/80">BASKET BALL</p>
        </div>
        <div className="max-w-[207px] w-full h-auto flex flex-col items-center pb-[22px] rounded-b-[12px] border-solid border-b-2 border-[#DFFE00] justify-center">
            <img src={Sport4} alt="Sport1" />
            <p className="mt-[7px] py-[8px] text-[14px] text-[#FFFFFFCC]/80">RACING</p>
        </div>
      </div>
    </div>
  );
};

export default Sport;
