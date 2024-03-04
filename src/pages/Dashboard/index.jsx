import React from "react";
import { useRouter } from "../../hooks/use-router";
import Header from "../../components/header";
import abox from "/images/abox.svg";
import Bird from "/images/Bird.svg";
import Team from "/images/Team.svg";
import Copy from "/images/Copy.svg";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      <div className="mt-6 flex justify-center items-center  w-full">
        <div className="flex md:min-w-[250px] justify-start  ml-[24px] items-start w-auto">
          <p className=" bg-[#52545A40] text-[#DFFE00] px-[35.5px] py-4 font-sans uppercase font-[400] text-[18px] rounded-full w-auto">
            Start Betting
          </p>
        </div>
      
        <div className="flex py-[26px] px-[16px] gap-[8px] lg:justify-center items-center w-full">
          <div className="bg-[#52545A40] rounded-[8px] ">
            <div className="flex justify-center items-center gap-[5px] my-[26px] mx-[16px]">
              <img src={abox} alt="abox" />
              <p className="text-[18px] text-[#DFFE00] font-inter font-[800] ">
                DASHBOARD
              </p>
            </div>
          </div>
          <div className="bg-[#DFFE00] rounded-[8px] ">
            <div className="flex justify-center items-center gap-[5px] my-[26px] mx-[16px]">
              <img src={Bird} alt="abox" />
              <p className="text-[18px] text-[#000000] font-inter font-[800] ">
                REFERRALS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D0F11]  mt-[2px] pb-[48px]  w-full h-full max-h-[600px]">
        <div className=" mx-[17px] b-[48px]  border-[#00FFA333] border-[0.5px] border-solid rounded-[6px] h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 justify-center">
              <img src={Team} alt="" className="" />
              <p className="text-[36px] font-[800] text-[#B1B6C6] font-inter">
                Referrals
              </p>
            </div>
            <p className="text-[#B1B6C6] text-[24px] font-normal font-sans">
              Refferals.
            </p>
            <div className="flex justify-center max-w-[687px] w-full items-center bg-[#16202B66]">
              <div className="flex justify-center flex-col items-center py-2">
                <h1 className="text-[18px] text-[#B1B6C6] font-normal font-sans">Your Code</h1>
                <p className="mt-2 text-[14px] text-[rgb(177,182,198)] font-normal font-sans  ">Share this code with your friends to earn 1% of their profits!</p>
              <div className="text-[#B1B6C6] mt-2 p-[9px] bg-[#14202D] border border=[#3C4450] rounded-[12px] text-[36px] font-400 fomt-sans">98mpw974</div>
              <div className=" mt-2 flex items-center justify-center gap-2">
                <div className="bg-[#14202D] p-2 text-[18px] font-normal font-sans text-[#B1B6C6] ">
                https://sedona.games/?r=98mpw974
                </div>
                <button className="bg-[#14202D] border border-[#3C4450] flex justify-center flex-col items-center 
                py-2 text-[#B1B6C6] text-[12px] font-[400] font-sans px-[6.5px] rounded-[6px]">
                   
                    COPY
                    <img src={Copy} alt="" />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
