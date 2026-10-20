import React from "react";
import appNotFoundImg from "../../assets/App-Error.png";

const AppNotFound = ({ handleClearSearchInputField }) => {
  return (
    <div className="mt-6 mb-[80px] text-center">
      <img src={appNotFoundImg} className="mx-auto" alt="" />
      <h1 className="text-[30px] md:text-[48px] font-semibold text-[##001931] mt-4 mb-2">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[17px] md:text-[20px] text-[#627382] mb-4">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button
        onClick={handleClearSearchInputField}
        className="font-semibold text-white py-[14.5px] px-[40.5px] rounded-[4px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default AppNotFound;
