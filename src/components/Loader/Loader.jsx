import React from "react";
import logoImg from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center text-[60px] font-semibold text-[#627382]">
        <span>L</span>
        <div className="animate-ping">
          <img
            src={logoImg}
            className="w-[80px] h-[80px] animate-spin"
            alt=""
          />
        </div>
        <span>oading</span>
      </div>
    </div>
  );
};

export default Loader;
