import React from "react";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = ({ appsData }) => {
  return (
    <div className="px-2.5 lg:px-0">
      <h1 className="text-[48px] text-center font-bold text-[#001931] mt-[80px]">
        Trending Apps
      </h1>
      <p className="text-[20px] text-center text-[#627382] mt-4 mb-[40px]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto">
        {[...appsData]
          .sort((a, b) => b.downloads - a.downloads)
          .slice(0, 8)
          .map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
      </div>

      <Link
        to="/apps"
        className="text-white font-semibold py-[14.5px] px-[39px] mt-[40px] mb-[80px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-[4px] cursor-pointer block w-fit mx-auto"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
