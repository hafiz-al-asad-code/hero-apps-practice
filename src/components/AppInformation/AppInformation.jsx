import React, { useEffect, useState } from "react";
import downloadIconImg from "../../assets/icon-downloads.png";
import ratingsIconImg from "../../assets/icon-ratings.png";
import reviewIconImg from "../../assets/icon-review.png";
import {
  addAppToLS,
  getStoredAppFromLS,
} from "../../utility/storeAppToLocalStorage";
import { toast } from "react-toastify";

const AppInformation = ({ filteredApp }) => {
  const [installedApp, setInstalledApp] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const getStoredApp = getStoredAppFromLS();
    setInstalledApp(getStoredApp);

    if (getStoredApp.includes(filteredApp.id)) {
      setDisabled(true);
    }
  }, []);

  const handleInstallApp = (id) => {
    const storedAppInLS = addAppToLS(id);

    if (storedAppInLS.includes(id)) {
      setInstalledApp([...installedApp, id]);
      setDisabled(true);
      toast("The App has been installed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-[40px] gap-y-6 md:gap-y-0 border-b border-gray-400 pb-[40px] mb-11">
      <img
        src={filteredApp.image}
        className="w-full md:w-[350px] md:h-[350px]"
        alt=""
      />

      {/* right */}
      <div className="flex-1">
        <h1 className="text-[32px] font-bold text-[#001931] mb-2">
          {filteredApp.title}
        </h1>
        <p className="text-[20px] text-[#627382] mb-[30px]">
          Developed by{" "}
          <span className="text-[20px] font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            {filteredApp.companyName}
          </span>
        </p>

        <div className="border-t border-gray-400 mb-[30px]"></div>

        <div className="flex gap-18 mb-[30px]">
          <div>
            <img src={downloadIconImg} alt="" />
            <p className="text-[#001931] my-2">Downloads</p>
            <p className="text-[25px] lg:text-[40px] font-extrabold">
              {filteredApp.downloads}M
            </p>
          </div>

          <div>
            <img src={ratingsIconImg} alt="" />
            <p className="text-[#001931] my-2">Average Ratings</p>
            <p className="text-[25px] lg:text-[40px] font-extrabold">
              {filteredApp.ratingAvg}
            </p>
          </div>

          <div>
            <img src={reviewIconImg} alt="" />
            <p className="text-[#001931] my-2">Total Reviews</p>
            <p className="text-[25px] lg:text-[40px] font-extrabold">
              {filteredApp.reviews}K
            </p>
          </div>
        </div>

        <button
          onClick={() => handleInstallApp(filteredApp.id)}
          disabled={disabled}
          className={`text-[20px] font-semibold py-3.5 px-5 bg-[#00D390] rounded-[4px] text-white block mx-auto md:mx-0 ${disabled ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {disabled ? "Installed" : "Install Now"} ({filteredApp.size} MB)
        </button>
      </div>
    </div>
  );
};

export default AppInformation;
