import { Link } from "react-router-dom";
import LogoSedona from "/images/logo_sedona.svg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import PropTypes from "prop-types";

const Header = ({ openChat, setOpenChat }) => {
  return (
    <div className="w-full h-[80px] md:h-[106px] flex md:justify-between items-center bg-black/[35] border-none">
      <div className="basis-1/3 mx-5">
        <Link to="/">
          <img src={LogoSedona} className="h-[64px]" />
        </Link>
      </div>

      <div className="hidden lg:block basis-1/3">
        <div className="flex flex-row justify-center items-center h-full">
          <a
            className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary mx-4"
            href="https://Instagram.com/sedonagames"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#805BEB26] rounded-[12px] p-2 mr-2">
              <img
                src="/images/2.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </a>
          <a
            className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary mx-4"
            href="https://x.com/sedonagames "
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#805BEB26] rounded-[12px] p-2 mr-2">
              <img
                src="/images/3.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </a>
          <a
            className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary mx-4"
            href="https://t.me/sedonagames"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#805BEB26] rounded-[12px] p-2 mr-2">
              <img
                src="/images/1.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </a>
          <a
            className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary mx-4"
            href="https://discord.gg/sedonagames"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#805BEB26] rounded-[12px] p-2 mr-2">
              <img
                src="/images/4.svg"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full lg:basis-1/3 flex flex-row justify-end">
        <div className="flex items-center justify-end md:mx-4">
          <img src="/images/SVG.svg" alt="setting" className="w-4 md:w-6" />
        </div>

        {!openChat && (
          <div
            className={`hidden w-[52px] h-[45px] rounded-[12px] md:grid place-items-center cursor-pointer ${
              screen === "chat" ? "bg-[#202B38]" : ""
            }`}
            onClick={() => setOpenChat(true)}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_736_56529)">
                <path
                  d="M0.816406 2.00001C0.816406 1.54801 1.18241 1.18201 1.63441 1.18201H16.3624C16.8134 1.18201 17.1804 1.54801 17.1804 2.00001V13.454C17.1805 13.5615 17.1595 13.668 17.1184 13.7673C17.0774 13.8667 17.0171 13.957 16.9412 14.0331C16.8652 14.1091 16.775 14.1695 16.6757 14.2106C16.5764 14.2518 16.4699 14.273 16.3624 14.273H6.33141C5.74541 14.273 5.17841 14.483 4.73341 14.863L2.16741 17.063C2.04869 17.1646 1.90334 17.2302 1.74856 17.2518C1.59377 17.2734 1.43604 17.2502 1.29401 17.185C1.15199 17.1198 1.03162 17.0152 0.947159 16.8837C0.862695 16.7522 0.817668 16.5993 0.817406 16.443L0.816406 2.00001Z"
                  stroke="url(#paint0_linear_736_56529)"
                  strokeWidth="1.636"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.09375 6.08995C4.09375 5.63895 4.45975 5.27295 4.91175 5.27295H9.82175C10.0387 5.27295 10.2468 5.35913 10.4002 5.51254C10.5536 5.66594 10.6397 5.874 10.6397 6.09095C10.6397 6.3079 10.5536 6.51596 10.4002 6.66936C10.2468 6.82277 10.0387 6.90895 9.82175 6.90895H4.91175C4.6948 6.90895 4.48674 6.82277 4.33334 6.66936C4.17993 6.51596 4.09375 6.3069 4.09375 6.08995ZM11.4567 6.08995C11.4567 5.63895 11.8227 5.27295 12.2747 5.27295H13.0927C13.2002 5.27295 13.3065 5.29411 13.4058 5.33522C13.505 5.37632 13.5952 5.43658 13.6712 5.51254C13.7471 5.58849 13.8074 5.67867 13.8485 5.77791C13.8896 5.87716 13.9108 5.98353 13.9108 6.09095C13.9108 6.19837 13.8896 6.30474 13.8485 6.40398C13.8074 6.50323 13.7471 6.5934 13.6712 6.66936C13.5952 6.74532 13.505 6.80557 13.4058 6.84668C13.3065 6.88779 13.2002 6.90895 13.0927 6.90895H12.2747C12.0578 6.90895 11.8497 6.82277 11.6963 6.66936C11.5429 6.51596 11.4567 6.3069 11.4567 6.08995ZM4.09375 9.36395C4.09375 8.91195 4.45975 8.54495 4.91175 8.54495H7.36675C7.58383 8.54495 7.79202 8.63118 7.94552 8.78468C8.09902 8.93818 8.18525 9.14637 8.18525 9.36345C8.18525 9.58053 8.09902 9.78872 7.94552 9.94222C7.79202 10.0957 7.58383 10.1819 7.36675 10.1819H4.91175C4.6948 10.1819 4.48674 10.0958 4.33334 9.94236C4.17993 9.78896 4.09375 9.5809 4.09375 9.36395Z"
                  fill="url(#paint1_linear_736_56529)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_736_56529"
                  x1="8.99841"
                  y1="1.18201"
                  x2="8.99841"
                  y2="17.2596"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4EAF90" />
                  <stop offset="1" stopColor="#B2D5B2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_736_56529"
                  x1="9.00225"
                  y1="5.27295"
                  x2="9.00225"
                  y2="10.1819"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4EAF90" />
                  <stop offset="1" stopColor="#B2D5B2" />
                </linearGradient>
                <clipPath id="clip0_736_56529">
                  <rect width="18" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}

        <div className="mx-3 md:mx-6 xl:mx-10">
          <WalletMultiButton />
        </div>
      </div>
    </div>
  );
};
export default Header;

Header.propTypes = {
  openChat: PropTypes.bool.isRequired,
  setOpenChat: PropTypes.func.isRequired,
};
