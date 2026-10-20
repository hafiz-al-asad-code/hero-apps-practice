import { Search } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import AppNotFound from "../../components/AppNotFound/AppNotFound";
import Loader from "../../components/Loader/Loader";

const Apps = () => {
  const appsData = useLoaderData();
  const [appsDataState, setAppsDataState] = useState(appsData);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();

    setSearchText(e.target.value);

    setIsLoading(true);

    setTimeout(() => {
      const filteredAppByTitle = appsData.filter((app) =>
        app.title.toLowerCase().includes(inputValue),
      );

      setAppsDataState(filteredAppByTitle);
      setIsLoading(false);
    }, 500);
  };

  const handleClearSearchInputField = () => {
    setSearchText("");
    setIsLoading(true);

    setTimeout(() => {
      setAppsDataState(appsData);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="mb-[80px] max-w-[1440px] mx-auto px-2.5 lg:px-0">
      <h1 className="text-[48px] text-center font-bold text-[#001931]">
        Our All Application
      </h1>
      <p className="text-[20px] text-center text-[#627382] mt-4 mb-[40px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <span className="text-2xl font-semibold text-[#001931] mb-4 md:mb-0">
          ({appsDataState.length}) Apps Found
        </span>

        <div className="relative">
          <input
            onChange={(e) => {
              handleSearch(e);
            }}
            value={searchText}
            type="search"
            name=""
            id=""
            className="border border-[#D2D2D2] rounded-[4px] py-3 pl-[46px] w-[300px] md:w-[400px]"
            placeholder="search Apps"
          />
          <Search className="absolute top-1/2 -translate-y-1/2 left-4 w-[20px] h-[20px] text-[#627382]" />
        </div>
      </div>

      {isLoading ? (
        <Loader></Loader>
      ) : appsDataState.length === 0 ? (
        <AppNotFound
          handleClearSearchInputField={handleClearSearchInputField}
        ></AppNotFound>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {appsDataState.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
