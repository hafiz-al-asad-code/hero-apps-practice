import React from "react";
import error404Img from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-[80px] text-center px-2.5 lg:px-0">
      <img src={error404Img} className="mx-auto" alt="" />
      <h1 className="text-[30px] md:text-[48px] font-semibold text-[##001931] mt-4 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-[17px] md:text-[20px] text-[#627382] mb-4">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="font-semibold text-white py-[14.5px] px-[40.5px] rounded-[4px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default Error404;
