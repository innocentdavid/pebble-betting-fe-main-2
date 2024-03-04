import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import clsx from "clsx";

import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { transferSol } from "../contract/bean";
import NotificationDialog from "../components/notificationModal";
import axios from "axios";
import { BASE_URL } from "../lib/config";
import Layout from "../components/layout";
import Box from "/images/Box.svg";
import Art1 from "/images/Art1.svg";
import Art2 from "/images/Art2.svg";
import Art3 from "/images/Art3.svg";
import Art4 from "/images/Art4.svg";
import Solana from "/images/solana.png";
import Margin from "/images/Star.svg";

// import * as anchor from "@project-serum/anchor";
// import { useUserSOLBalanceStore } from '../wallet/useUserSOLBalanceStore';
// import { useRouter } from "../hooks/use-router";
// import LiveChat from "../components/LiveChat/LiveChat";
// import { Button } from "@material-tailwind/react";
// import { FaTimes } from "react-icons/fa";
// import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
// import Header from "../components/header";

const MARBLES = [
  {
    icon: "/icons/tokyo-circle.svg",
    name: "Tokyo",
    color: "#EB5757",
    winner: true,
  },
  {
    icon: "/icons/moscow-circle.svg",
    name: "Moscow",
    color: "#D7D7D7",
    winner: false,
  },
  {
    icon: "/icons/cairo-circle.svg",
    name: "Cairo",
    color: "#634CF2",
    winner: false,
  },
  {
    icon: "/icons/newyork-circle.svg",
    name: "NewYork",
    color: "#F2C94C",
    winner: false,
  },
  {
    icon: "/icons/capetown-circle.svg",
    name: "CapeTown",
    color: "#BF2FED",
    winner: false,
  },
  {
    icon: "/icons/riodejaneiro-circle.svg",
    name: "RiodeJaneiro",
    color: "#2F80ED",
    winner: false,
  },
  {
    icon: "/icons/paris-circle.svg",
    name: "Paris",
    color: "#27AE60",
    winner: false,
  },
  {
    icon: "/icons/sydney-circle.svg",
    name: "Sydney",
    color: "#AE6027",
    winner: false,
  },
];

const HEMSTARS = [
  {
    icon: "/images/ckay.svg",
    name: "Ckay",
    color: "#CB031A",
    winner: true,
  },
  {
    icon: "/images/larry.svg",
    name: "Larry",
    color: "#04E6EA",
    winner: false,
  },
  {
    icon: "/images/sergeant.svg",
    name: "Sergeant",
    color: "#F4BF04",
    winner: false,
  },
  {
    // id: 4,
    icon: "/images/rookie.svg",
    name: "Rookie",
    color: "#0EE520",
    winner: false,
  },
];

const channel = "bobbypoffgaming";
// const channel = "";

const Match = () => {
  // const router = useRouter();
  const { matchId } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ title: "", body: "" });
  const [solValue, setSolValue] = useState(0.1);
  const [walletBalance, setWalletBalance] = useState(0);
  const [pebbleNumber, setPebble] = useState(1);
  const [isAdmin, setAdmin] = useState(false);

  const [selectedStat, setSelectedStat] = useState(HEMSTARS[0]);
  const [statDetails, setStatDetails] = useState(null);
  const [itemsList, setItemsList] = useState([]);

  const [updateBalance, setUpdateBalace] = useState(false);
  const [openChat, setOpenChat] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
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
        setIsMobile(true);
        setOpenChat(true);
      } else {
        setIsMobile(false);
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

  useEffect(() => {
    if (!selectedStat) return;

    const fetch = async () => {
      const pebble_number_detail =
        itemsList.findIndex((marble) => marble.name === selectedStat.name) + 1;

      const url = `${BASE_URL}/onViewStat?query=${matchId}&number=${pebble_number_detail}`;
      try {
        const res = await axios.get(url);
        if (res) {
          setStatDetails(res?.data?.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStat]);

  useEffect(() => {
    if (matchId === "bet") {
      setItemsList(MARBLES);
      setSelectedStat(MARBLES[0]);
    } else {
      setItemsList(HEMSTARS);
      setSelectedStat(HEMSTARS[0]);
    }
  }, [matchId]);

  const onMax = () => {
    setSolValue(walletBalance);
  };

  const SOLANA_HOST = clusterApiUrl("devnet");
  const connection = useMemo(() => new Connection(SOLANA_HOST), [SOLANA_HOST]);
  const wallet = useWallet();
  const admin_wallet = "6zudDjJMv2swcrn1MMmt7hjQ5AajBL3WipkQhaQT9Z4i";

  useEffect(() => {
    if (wallet.publicKey == admin_wallet) {
      setAdmin(true);
    }
  }, [wallet]);

  const fetchBalance = useCallback(async () => {
    try {
      const balance1 = await connection.getBalance(wallet.publicKey);
      console.log("balance wallet>>>>>>", balance1 / LAMPORTS_PER_SOL);
      setWalletBalance(balance1 / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error fetching balance:", error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, wallet, updateBalance]);

  useEffect(() => {
    fetchBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, updateBalance]);

  const onInputSol = (e) => {
    e.preventDefault();
    setSolValue(e.target.value);
  };

  const onClickPlus = () => {
    let curValue;
    try {
      curValue = parseFloat(solValue);
      if (isNaN(curValue)) curValue = 0;
    } catch (e) {
      curValue = 0;
    }
    if (curValue + 1 > walletBalance) {
      setSolValue(walletBalance);
    } else {
      setSolValue(curValue + 1);
    }
  };

  const onClickMinus = () => {
    let curValue;
    try {
      curValue = parseFloat(solValue);
      if (isNaN(curValue)) curValue = 0;
    } catch (e) {
      curValue = 0;
    }
    if (curValue < 1) {
      setSolValue(curValue);
    } else {
      setSolValue(curValue - 1);
    }
  };

  const getExpectWinner = () => {
    axios
      .get(`${BASE_URL}/api/expetwinner?bet_id=${matchId}`)
      .then((data) => {
        var data_t = data.data;
        if (data_t.status == "success") {
          setMessage({
            title: "Something went wrong",
            body: "Expected Winner Number Get!!!",
          });
          setOpen(true);
        } else {
          setMessage({
            title: "Something went wrong",
            body: "Invalid Betting Time!!!",
          });
          setOpen(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onPlaceBet = async () => {
    let ref = admin_wallet;

    let depositSol = parseFloat(solValue);
    let pebbleNum = parseInt(pebbleNumber);

    if (depositSol === null || depositSol < 0.1 || walletBalance < depositSol) {
      setMessage({
        title: "Something went wrong",
        body: "Invalid Deposit Value!!!\nMinimum Deposit Value is 0.1 SOL.",
      });
      setOpen(true);
      return;
    }

    try {
      axios
        .get(
          `${BASE_URL}/api/deposit?query=${depositSol}&pebble=${pebbleNum}&bettor=${wallet.publicKey}&bet_id=${matchId}`
        )
        .then(async (data) => {
          var data_t = data.data;
          if (data_t.status == "success") {
            console.log(data_t);
            let tx = await transferSol(wallet, ref, depositSol);
            if (tx === null) {
              return;
            }
            setOpen(true);
            setMessage({
              title: "Betting",
              body: "Betting Success!!!",
            });
            sleep(10000);
            setUpdateBalace(!updateBalance);
          } else {
            setMessage({
              title: "Something went wrong",
              body: "Invalid Betting Time!!!",
            });
            setOpen(true);
          }
        })
        .catch((error) => {
          console.error("error", error);
        });
    } catch (err) {
      console.error(err);
      return;
    }
  };

  function onViewState(pebble_number_detail) {
    axios
      .get(
        `${BASE_URL}/api/onViewStat?query=${matchId}&number=${pebble_number_detail}`
      )
      .then((data) => {
        var data_t = data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <NotificationDialog
        open={open}
        setOpen={setOpen}
        title={message.title}
        body={message.body}
      />

      <Layout
        isAdmin={isAdmin}
        leftSide={
          <>
            <div className="flex flex-col bg-gradient-to-br p-2 w-full h-full gap-y-[48px] bg-[#16202B] rounded">
              <div className="flex flex-row justify-between  p-2 m-8 md:m-2 border-2 border-[#C88300]">
                <div className="flex flex-col">
                  <p className="text-white text-[32px]">{itemsList.length}</p>
                  <p className="text-[#F2F2F2] p-0">
                    {matchId === "bet" ? "Marbles" : "Hamsters"}
                  </p>
                </div>
                <div className="flex flex-col">
                  {/* <p className="text-[#F2F2F2]">Next</p>
                  <p className="text-[#F2F2F2]">Betting in</p> */}
                  <div className="flex flex-row">
                    <img src="/icons/refresh.svg"></img>
                    <p className="text-white">23:20:19</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="h-[1px] bg-white w-16"></div>
                <p className="text-white whitespace-nowrap mx-2">
                  Last {matchId === "bet" ? "Marble" : "Hamstars"} Stat
                </p>
                <div className="h-[1px] bg-white w-16"></div>
              </div>
              <div className="flex flex-col px-0 gap-y-3">
                {itemsList.map((item, i) => {
                  return (
                    <div
                      key={`hemstars_${i + 1}`}
                      className="flex flex-row items-center"
                    >
                      <p className="font-bold text-white mr-3">{i + 1}</p>
                      <img
                        src={item?.icon}
                        style={{ width: "19px", height: "19px" }}
                        className="mr-3"
                      ></img>
                      <p
                        className={`rounded-[13px] py-1 !bg-opacity-20 font-bold px-2 mr-1 cursor-pointer`}
                        style={{
                          backgroundColor: `${item?.color}50`,
                          color: item?.color,
                        }}
                        onClick={() => {
                          onViewState(i + 1);
                          setSelectedStat(item);
                        }}
                      >
                        {item?.name}
                      </p>

                      {i === 0 && (
                        <img
                          src="/images/cup.svg"
                          style={{ width: "14px", height: "14px" }}
                        ></img>
                      )}
                      <div className="flex-1" />

                      <p
                        className={`${
                          selectedStat.name === item?.name
                            ? "text-white"
                            : "text-gray-600"
                        } text-sm underline ml-3 cursor-pointer select-none whitespace-nowrap`}
                        onClick={() => {
                          onViewState(i + 1);
                          setSelectedStat(item);
                        }}
                      >
                        View stats
                      </p>
                    </div>
                  );
                })}
              </div>
              {selectedStat && (
                <div className="">
                  <div className="mt-10 flex flex-row items-center justify-center gap-x-3">
                    <div className="h-[1px] bg-white w-16"></div>
                    <p className="text-white">Detailed Stat</p>
                    <div className="h-[1px] bg-white w-16"></div>
                  </div>

                  <div className="flex items-center justify-center gap-x-16 mt-6">
                    <img
                      src={selectedStat?.icon}
                      alt=""
                      className="w-[60px] h-auto"
                    />
                    <div
                      className="rounded-[20px] h-[42px] min-w-[75px] px-4 shadow-[0px_0px_9.9px_0px_rgba(0,_0,_0,_0.30)] grid place-items-center text-[21px] font-bold"
                      style={{
                        backgroundColor: `${selectedStat?.color}20`,
                        color: `${selectedStat?.color}`,
                      }}
                    >
                      {selectedStat.name}
                    </div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center">
                      <div className="">
                        <div className="text-[10px]">Total Wins</div>
                        <div className="font-bold text-xs">
                          ${statDetails?.[3]?.toLocaleString()}
                        </div>
                      </div>
                      <img src="/images/graph.png" alt="" />
                    </div>

                    <div className="flex justify-between gap-2">
                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Highest bet</div>
                          <div className="font-bold text-xs">
                            ${statDetails?.[4]}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Total Bets</div>
                          <div className="font-bold text-xs">
                            {statDetails?.[5]}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Win Ratio</div>
                          <div className="font-bold text-xs">0.8</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between gap-2">
                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Category</div>
                          <div className="font-bold text-xs">$500</div>
                        </div>
                      </div>

                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Category</div>
                          <div className="font-bold text-xs">325</div>
                        </div>
                      </div>

                      <div className="rounded-[2px] bg-[#262626] m-1 flex justify-between items-center w-full">
                        <div className="">
                          <div className="text-[10px]">Category</div>
                          <div className="font-bold text-xs">0.8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        }
      >
        <div className="flex">
          <div className="w-full">
            <ReactTwitchEmbedVideo
              width={"100%"}
              height={480}
              layout="video"
              theme="dark"
              channel={channel}
            />
            <div className="rounded-[12px] bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] mt-5 md:px-6 px-3 py-3 flex flex-col justify-between w-full border-[#00FFA320] border">
              <div className="flex flex-col md:flex-row">
                <div className="basis-[60%]">
                  <p className="text-white mt-2">
                    {matchId === "bet"
                      ? "Choose your winner"
                      : "Pick your winner"}
                  </p>
                  <img
                    src="/images/borderline.svg"
                    alt="no image"
                    className="my-2 w-full"
                  />
                  <br />
                  <div className="w-full grid grid-cols-2 gap-2">
                    {itemsList.map((item, i) => {
                      return matchId === "bet" ? (
                        <div
                          key={`choose_hemstar-${i + 1}`}
                          id={item?.name}
                          onClick={() => {
                            setPebble(i + 1);
                          }}
                          className={clsx(
                            "text-white border border-1  h-[48px] flex flex-row items-center gap-x-2 p-1 rounded m-3",
                            pebbleNumber === i + 1
                              ? "bg-black"
                              : " to-[#B2D5B2]"
                          )}
                        >
                          <img
                            src={MARBLES[i].icon}
                            className="relative left-0 "
                          />
                          <div>{item?.name}</div>
                        </div>
                      ) : (
                        <div
                          key={`choose_hemstar-${i + 1}`}
                          id={item?.name}
                          onClick={() => {
                            setPebble(i + 1);
                          }}
                          className={clsx(
                            "text-white border border-1 h-[96px] flex flex-col items-center gap-y-2 p-1 rounded m-5",
                            pebbleNumber === i + 1 ? "bg-black" : "to-[#B2D5B2]"
                          )}
                        >
                          <img
                            src={HEMSTARS[i].icon}
                            className="relative left-0"
                          />
                          <div>{item?.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[2px] bg-[#A2A1E5] ml-2 mr-4"></div>
                <div className="flex flex-col md:w-[40%]">
                  <p className="text-white mt-2">Enter your bet</p>
                  <img
                    src="/images/borderline.svg"
                    alt="no image"
                    className="my-2 w-full"
                  />
                  <div className="flex justify-between flex-col my-2 gap-y-2">
                    <div className="flex justify-end">
                      <div className="flex flex-row ">
                        <img
                          src="/images/wallet.svg"
                          alt=""
                          style={{ width: "12px", height: "12px" }}
                        />
                        <p className="font-bold text-white text-xs text-[#FFFFFF40] mx-2">
                          {walletBalance}SOL
                        </p>
                      </div>
                    </div>
                    <div className="bg-black rounded-[16px] flex flex-row p-3 gap-1 items-center ">
                      <div className="flex flex-row bg-[#805BEB26] basis-1/2 px-2 items-center rounded">
                        <img
                          src="/images/Solana.svg"
                          style={{ width: "36px", height: "20px" }}
                        ></img>
                        <p className="px-5 font-bold">SOL</p>
                        <img
                          src="/images/array.svg"
                          alt=""
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                      <input
                        className="py-1 px-2 text-[#FFFFFF40] basis-1/2 font-bold text-1xl bg-black active:bg-transparent md:w-16 w-14 text-center"
                        value={solValue}
                        onChange={onInputSol}
                      ></input>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex flex-row ">
                        <p
                          onClick={onMax}
                          className="font-bold text-white text-xs text-[#FFFFFF40] mx-2 bg-[#D9D9D90D]"
                        >
                          MAX
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center my-7">
                    <div
                      onClick={onPlaceBet}
                      className="flex flex-row bg-[#000000] rounded-[12px] justify-center w-full items-center py-3 px-7 cursor-pointer border border-[#B2D5B2]"
                    >
                      <p className="text-[#fafafa] ml-3 font-bold">Place Bet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[36px] w-full  h-auto border-[0.5px] border-[#4EAF90] border-solid">
              <div className="flex justify-between items-center mt-4 w-full px-6">
                <p className="font-inter font-normal text-[#FFFFFF] text-[12px]">
                  Pick your winner
                </p>
                <div className="flex justify-center items-center gap-[6px]">
                  <img src={Box} alt="" className="" />
                  <p className="text-[#FFFFFF40] font-inter font-normal text-[12px] ">
                    0 SOL
                  </p>
                </div>
              </div>

              <div className="flex w-full h-auto items-center  ">
                <div className=" overflow-x-auto h-auto items-center flex gap-[5px] mb-10  w-full">
                  <div className="max-w-[300px] min-w-[210px] lg:w-full w-fit flex-col flex items-center justify-center">
                    <div           className="flex justify-center items-center mb-6 mt-8  border-[1px] border-[#000000] 
                rounded-[4px] border-solid px-[22px] py-[20px] "
                    >
                      <img src={Art1} alt="" />
                     
                    </div>
                    <div className=" w-full h-auto flex justify-center  items-center ">
                      <div className="bg-[#52545A80] border border-solid border-[#000000]  rounded-l-[4px] rounded-b-[4px]   flex items-center justify-center ">
                        <img src={Solana} alt="" className=" mx-1" />
                        <input
                          type="number"
                          placeholder="0.00"
                          className="placeholder-[#FFFFFF40]  font-Robo py-2 text-[14px] outline-none w-[50px] text-[#FFFFFF40] mx-2 bg-[#52545A10] "
                        />
                      </div>
                      <div className="bg-[#121D28] border border-solid border-[#000000]  rounded-r-[4px] rounded-b-[4px]">
                        <button className="text-[#B1B6C6] cursor-pointer font-inter p-[2px] m-[6px] font-[800] text-[14px]">
                          Place Bet
                        </button>
                      </div>
                    </div>
                    <div className="flex ml-24 mt-[5px] rounded-[2px] bg-[#D9D9D90D] justify-end">
                      <p className="px-1 text-white/40 text-[14px] font-[400] font-Inter">
                        Max
                      </p>
                    </div>

                    <div className="flex w-full flex-col mt-[6px] items-center justify-center">
                      <div className="flex w-full px-[13px] py-[13px] justify-between items-center ">
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          USER
                        </p>
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          WAGER
                        </p>
                      </div>

                      <div className="w-full  space-y-[1px]">
                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px]">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between  py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08]  justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full pb-[40px] bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[300px] min-w-[210px] lg:w-full w-fit flex-col flex items-center justify-center">
                    <div           className="flex justify-center items-center  mt-8 r mb-6  border-[1px] border-[#4EAF90] 
                rounded-[4px] border-solid px-[22px] py-[20px] "
                    >
                      <img src={Art2} alt="" />
                     
                    </div>
                    <div className=" w-full h-auto flex justify-center  items-center ">
                      <div className="bg-[#52545A80] border border-solid border-[#000000]  rounded-l-[4px] rounded-b-[4px]   flex items-center justify-center ">
                        <img src={Solana} alt="" className=" mx-1" />
                        <input
                          type="number"
                          placeholder="0.00"
                          className="placeholder-[#FFFFFF40]  font-Robo py-2 text-[14px] outline-none w-[50px] text-[#FFFFFF40] mx-2 bg-[#52545A10] "
                        />
                      </div>
                      <div className="bg-[#121D28] border border-solid border-[#000000]  rounded-r-[4px] rounded-b-[4px]">
                        <button className="text-[#B1B6C6] cursor-pointer font-inter p-[2px] m-[6px] font-[800] text-[14px]">
                          Place Bet
                        </button>
                      </div>
                    </div>
                    <div className="flex ml-24 mt-[5px] rounded-[2px] bg-[#D9D9D90D] justify-end">
                      <p className="px-1 text-white/40 text-[14px] font-[400] font-Inter">
                        Max
                      </p>
                    </div>

                    <div className="flex w-full flex-col mt-[6px] items-center justify-center">
                      <div className="flex w-full px-[13px] py-[13px] justify-between items-center ">
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          USER
                        </p>
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          WAGER
                        </p>
                      </div>

                      <div className="w-full  space-y-[1px]">
                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px]">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between  py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08]  justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full pb-[40px] bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[300px] min-w-[210px] lg:w-full w-fit flex-col flex items-center justify-center">
                    <div           className="flex justify-center items-center mb-6 mt-8  border-[1px] border-[#000000] 
                rounded-[4px] border-solid px-[22px] py-[20px] "
                    >
                      <img src={Art3} alt="" />
                     
                    </div>
                    <div className=" w-full h-auto flex justify-center  items-center ">
                      <div className="bg-[#52545A80] border border-solid border-[#000000]  rounded-l-[4px] rounded-b-[4px]   flex items-center justify-center ">
                        <img src={Solana} alt="" className=" mx-1" />
                        <input
                          type="number"
                          placeholder="0.00"
                          className="placeholder-[#FFFFFF40]  font-Robo py-2 text-[14px] outline-none w-[50px] text-[#FFFFFF40] mx-2 bg-[#52545A10] "
                        />
                      </div>
                      <div className="bg-[#121D28] border border-solid border-[#000000]  rounded-r-[4px] rounded-b-[4px]">
                        <button className="text-[#B1B6C6] cursor-pointer font-inter p-[2px] m-[6px] font-[800] text-[14px]">
                          Place Bet
                        </button>
                      </div>
                    </div>
                    <div className="flex ml-24 mt-[5px] rounded-[2px] bg-[#D9D9D90D] justify-end">
                      <p className="px-1 text-white/40 text-[14px] font-[400] font-Inter">
                        Max
                      </p>
                    </div>

                    <div className="flex w-full flex-col mt-[6px] items-center justify-center">
                      <div className="flex w-full px-[13px] py-[13px] justify-between items-center ">
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          USER
                        </p>
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          WAGER
                        </p>
                      </div>

                      <div className="w-full  space-y-[1px]">
                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px]">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between  py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08]  justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full pb-[40px] bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[300px] min-w-[210px] lg:w-full w-fit flex-col flex items-center justify-center">
                    <div           className="flex justify-center items-center mb-6 mt-8  border-[1px] border-[#000000] 
                rounded-[4px] border-solid px-[22px] py-[20px] "
                    >
                      <img src={Art4} alt="" />
                     
                    </div>
                    <div className=" w-full h-auto flex justify-center  items-center ">
                      <div className="bg-[#52545A80] border border-solid border-[#000000]  rounded-l-[4px] rounded-b-[4px]   flex items-center justify-center ">
                        <img src={Solana} alt="" className=" mx-1" />
                        <input
                          type="number"
                          placeholder="0.00"
                          className="placeholder-[#FFFFFF40]  font-Robo py-2 text-[14px] outline-none w-[50px] text-[#FFFFFF40] mx-2 bg-[#52545A10] "
                        />
                      </div>
                      <div className="bg-[#121D28] border border-solid border-[#000000]  rounded-r-[4px] rounded-b-[4px]">
                        <button className="text-[#B1B6C6] cursor-pointer font-inter p-[2px] m-[6px] font-[800] text-[14px]">
                          Place Bet
                        </button>
                      </div>
                    </div>
                    <div className="flex ml-24 mt-[5px] rounded-[2px] bg-[#D9D9D90D] justify-end">
                      <p className="px-1 text-white/40 text-[14px] font-[400] font-Inter">
                        Max
                      </p>
                    </div>

                    <div className="flex w-full flex-col mt-[6px] items-center justify-center">
                      <div className="flex w-full px-[13px] py-[13px] justify-between items-center ">
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          USER
                        </p>
                        <p className="text-[11.06px] font-inter font-[700]  text-[#676D7C]">
                          WAGER
                        </p>
                      </div>

                      <div className="w-full  space-y-[1px]">
                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px]">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between  py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full bg-[#CBD7FF08]  justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full pb-[40px] bg-[#CBD7FF08] justify-between py-[6px] rounded-[4px] items-center">
                          <div className="flex items-center pl-[10px] gap-[6px] ">
                            <img
                              src={Margin}
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <p className="font-[700] text-[10px] font-inter capitalize text-[#68758C]">
                              3dQp..HU7f
                            </p>
                          </div>
                          <div className="pr-[12px]">
                            <p className="text-[#B1B6C6] text-[13.23] font-inter font-[500]">
                              $0.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Match;
