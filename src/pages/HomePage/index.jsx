import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import LiveChat from "../../components/LiveChat/LiveChat";
import PointerScroll from "../../components/slide/imgSlider";
import Layout from "../../components/layout";

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
        <div className="flex-1 min-h-[300px]">
          carousel
        </div>

        <div className="rounded-xl border border-[#00FFA320] px-[17px] pt-[25px] pb-[35px] mt-5 w-[calc(82vw-378px)] overflow-auto">
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
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
