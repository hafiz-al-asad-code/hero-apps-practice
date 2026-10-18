import React from "react";

const AppDescription = ({ filteredApp }) => {
  return (
    <div>
      <h3 className="text-[24px] font-semibold text-[#001931] mb-6">
        Description
      </h3>

      <p className="text-[20px] text-[#627382] whitespace-pre-line ">
        {filteredApp.description}
      </p>
    </div>
  );
};

export default AppDescription;
