import React from "react";
import Banner from "../../components/Banner/Banner";
import States from "../../components/States/States";
import TrendingApps from "../../components/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps appsData={appsData}></TrendingApps>
    </div>
  );
};

export default Home;
