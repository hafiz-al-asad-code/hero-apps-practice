import React from "react";

const States = () => {
  return (
    <div className="p-[80px] text-center text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
      <h1 className="text-[48px] font-bold mb-10">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex justify-evenly">
        <div>
          <p>Total Downloads</p>
          <p className="text-[64px] font-extrabold">29.6M</p>
          <p>21% more than last month</p>
        </div>

        <div>
          <p>Total Reviews</p>
          <p className="text-[64px] font-extrabold">906K</p>
          <p>46% more than last month</p>
        </div>

        <div>
          <p>Active Apps</p>
          <p className="text-[64px] font-extrabold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
