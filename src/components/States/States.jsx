import React from "react";

const States = () => {
  return (
    <div className="p-[10px] md:p-[40px] lg:p-[80px] text-center text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
      <h1 className="text-[20px] md:text-[48px] font-bold mb-10">
        Trusted by Millions, Built for You
      </h1>

      <div className="grid grid-cols-3">
        <div>
          <p className="text-[10px] md:text-[16px]">Total Downloads</p>
          <p className="md:text-[40px] lg:text-[64px] font-extrabold">29.6M</p>
          <p className="text-[10px] md:text-[16px]">21% more than last month</p>
        </div>

        <div>
          <p className="text-[10px] md:text-[16px]">Total Reviews</p>
          <p className="md:text-[40px] lg:text-[64px] font-extrabold">906K</p>
          <p className="text-[10px] md:text-[16px]">46% more than last month</p>
        </div>

        <div>
          <p className="text-[10px] md:text-[16px]">Active Apps</p>
          <p className="md:text-[40px] lg:text-[64px] font-extrabold">132+</p>
          <p className="text-[10px] md:text-[16px]">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
