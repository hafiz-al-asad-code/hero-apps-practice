import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="inter-font bg-[#F5F5F5]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
