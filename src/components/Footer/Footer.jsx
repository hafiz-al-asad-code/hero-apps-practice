import React from "react";
import footerLogo from "../../assets/logo.png";
import xLogo from "../../assets/x.png";
import linkedinLogo from "../../assets/linkedin.png";
import facebookLogo from "../../assets/facebook.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white pt-[25px] md:pt-[35px] pb-[20px] md:pb-[30px] px-2.5 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-[4px]">
              <img src={footerLogo} className="w-[40px]" alt="" />
              <span className="font-bold">HERO.IO</span>
            </div>
          </Link>

          <div>
            <p className="md:text-[20px] font-medium mb-4">Social Links</p>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank">
                <img src={xLogo} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/hafiz-al-asad-bhuiyan"
                target="_blank"
              >
                <img src={linkedinLogo} alt="" />
              </a>
              <a href="https://www.facebook.com/h.a.a.pabon" target="_blank">
                <img src={facebookLogo} alt="" />
              </a>
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
