import React from "react";
import footerLogo from "../../assets/logo.png";
import xLogo from "../../assets/x.png";
import linkedinLogo from "../../assets/linkedin.png";
import facebookLogo from "../../assets/facebook.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white pt-[35px] pb-[30px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={footerLogo} className="w-[40px]" alt="" />
            <span className="font-bold">HERO.IO</span>
          </div>

          <div>
            <p className="text-[20px] font-medium mb-4">Social Links</p>
            <div className="flex space-x-4">
              <img src={xLogo} alt="" />
              <img src={linkedinLogo} alt="" />
              <img src={facebookLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="border border-[#61646a] my-6"></div>

        <p className="text-[#FAFAFA] text-center">
          Copyright &copy; 2026 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
