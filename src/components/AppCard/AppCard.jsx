import React from "react";
import downloadIconImg from "../../assets/download.png";
import starIconImg from "../../assets/star.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/appDetails/${app.id}`}>
      <div className="rounded-[4px] p-4 shadow-2xl">
        <img src={app.image} className="w-full rounded-[8px]" alt="" />
        <p className="md:text-[20px] font-medium text-[#001931] my-4">
          {app.title}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2px] md:gap-2 bg-[#F1F5E8] rounded-[4px] p-[4px] md:py-1.5 md:px-2.5">
            <img src={downloadIconImg} alt="" />
            <span className="font-medium text-[#00D390]">{app.downloads}M</span>
          </div>

          <div className="flex items-center gap-[2px] md:gap-2 bg-[#FFF0E1] rounded-[4px] p-[4px] md:py-1.5 md:px-2.5">
            <img src={starIconImg} alt="" />
            <span className="font-medium text-[#FF8811]">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
