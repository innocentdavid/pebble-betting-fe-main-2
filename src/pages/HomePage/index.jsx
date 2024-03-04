import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Sedona from "../../components/sedona/sedona";
import Sport from "../../components/Sport/Sport";
import Layout from "../../components/layout";
import round from "/images/round.svg";
import CarouselComp from "../../components/slider/carousel";
import CarouselWithContent from "../../components/CarouselAuto/CarouselWithContent";
import Last from "../../components/Last/Last";
import TransactionsTable from "../../components/Table/TableComp";
import Slot from "../../components/Slots/slot";
const HomePage = () => {
  const [openChat, setOpenChat] = useState(true);
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpand(true);
      } else {
        setExpand(false);
        setOpenChat(false);
      }

      if (window.innerWidth < 768) {
        setOpenChat(true);
      } else {
        setOpenChat(true);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout leftSide={<Navbar expand={expand} setExpand={setExpand} />}>
      <div className="flex flex-col">
        {/* <CarouselComp /> */}
        <div className="max-w-[100vw] max-h-[300px] overflow-hidden">
          <CarouselWithContent />
        </div>

        <div className="max-w-[100vw] max-h-[300px] overflow-hidden">
          <Sedona />
        </div>

        <div className=" mt-[42px] flex items-center w-full gap-2 mb-6">
          <img src={round} alt="round" className="" />
          <h1 className="text-[#FFFFFF] text-[16px]  font-[700] uppercase font-chakra">
            SEDONA ROOMS
          </h1>
          <p className="text-[10px] text-[#DFFE0061]/40 font-[600] font-inter ml-4 ">
            COMING SOON
          </p>
        </div>

        <div className="max-w-[100vw]  _max-h-[400px] _overflow-hidden">
          <Slot />
        </div>

         <div className="max-w-[100vw]  _max-h-full _overflow-hidden">
          <Sport />
        </div>

        {/* <div className="rounded-xl border border-[#00FFA320] px-[17px] pt-[25px] pb-[35px] mt-5 w-[calc(82vw-378px)] overflow-auto">
          <div className="h-5 flex flex-row items-center">
            <img
              className="h-3 mx-2"
              src="/images/livewins.svg"
              alt="no image"
            />
            <p>Live Wins</p>
          </div>
          <div className="h-[120px] border-white my-2 flex justify-center shadow-transparent">
            <PointerScroll />
           
          </div>
        </div> */}

        <div className="w-full items-center h-auto mx-auto flex flex-col mt-[40px]">
          <div className="flex items-center justify-between w-full flex-col md:flex-row">
            <div className="flex items-center w-full md:w-auto justify-start gap-2 ">
              <img
                src={"./images/ranking.png"}
                alt=""
                className="!w-[20px] !h-[20px]"
              />
              <p className="text-[16px] font-[700] font-inter mt-1">BETS</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 w-full md:w-auto justify-start space-x-[6px] md:px-6 lg:px-0">
              <p className="bg-[#2C2C2C] rounded-[4px] py-[5px] px-[12px] text-[12px] font-chakra font-[600] cursor-pointer  ">
                Casino Bets
              </p>
              <p className="bg-[#2C2C2C] rounded-[4px] py-[5px] px-[12px] text-[12px]  font-chakra font-[600] cursor-pointer  ">
                Degen
              </p>
              <p className="bg-[#2C2C2C] rounded-[4px] py-[5px] px-[12px] text-[12px] font-chakra font-[600] cursor-pointer text-[#DFFE00]  ">
                High Roller
              </p>
            </div>
          </div>
          <div className="mt-4 w-full h-auto">
            <TransactionsTable />
          </div>
        </div>

        <Last />
      </div>
    </Layout>
  );
};

export default HomePage;
