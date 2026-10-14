import React from "react";
import googlePlayImg from "../../assets/googlePlay.png";
import appStoreImg from "../../assets/appStore.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <h1 className="text-[50px] md:text-[72px] text-[#001931] font-bold text-center">
        We Build <br />
        <span className="font-black bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[20px] text-center text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center items-center gap-4 my-10">
        <a href="https://play.google.com/store/games?hl=en" target="_blank">
          <div className="flex items-center gap-2.5 border border-[#D2D2D2] py-3 px-6 rounded-[4px]">
            <img src={googlePlayImg} alt="" />
            <button>Google Play</button>
          </div>
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <div className="flex items-center gap-2.5 border border-[#D2D2D2] py-3 px-6 rounded-[4px]">
            <img src={appStoreImg} alt="" />
            <button>App Store</button>
          </div>
        </a>
      </div>

      <img src={bannerImg} className="mx-auto" alt="" />
    </div>
  );
};

export default Banner;
