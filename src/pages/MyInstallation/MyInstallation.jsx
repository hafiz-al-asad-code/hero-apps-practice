import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import InstalledAppsCard from "../../components/InstalledAppsCard/InstalledAppsCard";
import { useLoaderData } from "react-router";
import {
  getStoredAppFromLS,
  removeAppFromLS,
} from "../../utility/storeAppToLocalStorage";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const [installedAppFromLS, setInstalledAppFromLS] = useState([]);
  const [sort, setSort] = useState("");
  const appsData = useLoaderData();

  useEffect(() => {
    const storedAppInLS = getStoredAppFromLS();

    const filteredApps = appsData.filter((app) =>
      storedAppInLS.includes(app.id),
    );

    setInstalledAppFromLS(filteredApps);
  }, []);

  const handleUninstall = (id) => {
    const updatedStoredAppIdFromLS = removeAppFromLS(id);
    const filteredApps = appsData.filter((app) =>
      updatedStoredAppIdFromLS.includes(app.id),
    );

    setInstalledAppFromLS(filteredApps);
    toast("App has been uninstalled");
  };

  const handleSort = (type) => {
    if (type === "highToLow") {
      const sortByDownloadHighToLow = [...installedAppFromLS].sort(
        (a, b) => b.downloads - a.downloads,
      );
      setInstalledAppFromLS(sortByDownloadHighToLow);
    }

    if (type === "lowToHigh") {
      const sortByDownloadLowToHigh = [...installedAppFromLS].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setInstalledAppFromLS(sortByDownloadLowToHigh);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto mb-[80px] px-2.5 lg:px-0">
      <h1 className="text-[48px] text-center font-bold text-[#001931]">
        Your Installed Apps
      </h1>
      <p className="text-[20px] text-center text-[#627382] mt-4 mb-[40px]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <span className="text-2xl font-semibold text-[#001931] mb-4">
          ({installedAppFromLS.length}) Apps Found
        </span>

        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2.5 bg-white shadow-sm border border-[#D2D2D2] rounded-[4px] px-4 py-3 text-[#627382]"
            >
              Sort By Download {sort ? `: ${sort}` : ""} <BiSolidDownArrow />
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li
                onClick={() => {
                  handleSort("highToLow");
                  setSort("High-Low");
                }}
              >
                <a>High-Low</a>
              </li>
              <li
                onClick={() => {
                  handleSort("lowToHigh");
                  setSort("Low-High");
                }}
              >
                <a>Low-High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {installedAppFromLS.map((app) => (
          <InstalledAppsCard
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          ></InstalledAppsCard>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
