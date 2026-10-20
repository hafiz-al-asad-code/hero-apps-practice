import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "../components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="inter-font bg-[#F5F5F5]">
      <Navbar></Navbar>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
