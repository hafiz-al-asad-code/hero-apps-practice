import React from "react";
import { useLoaderData, useParams } from "react-router";
import AppChart from "../../components/AppChart/AppChart";
import AppInformation from "../../components/AppInformation/AppInformation";
import AppDescription from "../../components/AppDescription/AppDescription";

const AppDetails = () => {
  const appsData = useLoaderData();
  const { id } = useParams();

  const filteredApp = appsData.find((app) => app.id === Number(id));

  return (
    <div className="max-w-[1440px] mx-auto mb-[80px] px-2.5 lg:px-0">
      {/* app information */}
      <AppInformation filteredApp={filteredApp}></AppInformation>

      {/* app chart */}
      <h3 className="text-[24px] font-semibold text-[#001931] mb-6">Ratings</h3>
      <AppChart filteredApp={filteredApp}></AppChart>

      <div className="border-b border-gray-400 my-[40px]"></div>

      {/* app description */}
      <AppDescription filteredApp={filteredApp}></AppDescription>
    </div>
  );
};

export default AppDetails;
