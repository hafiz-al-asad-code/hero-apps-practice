import React from "react";
import downloadIconImg from "../../assets/download.png";
import starIconImg from "../../assets/star.png";
import { removeAppFromLS } from "../../utility/storeAppToLocalStorage";

const InstalledAppsCard = ({ app, handleUninstall }) => {
  return (
    <div className="md:flex justify-between items-center p-4 rounded-[4px] bg-white shadow-sm">
      {/* left */}
      <div className="flex items-center gap-4">
        <img
          src={app.image}
          className="w-[80px] h-[80px] rounded-[8px]"
          alt=""
        />
        <div>
          <h3 className="text-[20px] font-medium text-[#001931] mb-4">
            {app.title}
          </h3>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-[2px] md:gap-1">
              <img src={downloadIconImg} alt="" />
              <span className="font-medium text-[#00D390]">
                {app.downloads}M
              </span>
            </div>

            <div className="flex items-center gap-[2px] md:gap-1">
              <img src={starIconImg} alt="" />
              <span className="font-medium text-[#FF8811]">
                {app.ratingAvg}
              </span>
            </div>

            <span className="text-[#627382]">{app.size} MB</span>
          </div>
        </div>
      </div>

      {/* right */}
      <div>
        <button
          onClick={() => handleUninstall(app.id)}
          className="mt-4 md:mt-0 w-full md:w-fit font-semibold py-3 px-4 rounded-[4px] bg-[#00D390] text-white cursor-pointer"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
