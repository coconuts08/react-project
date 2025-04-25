import React from "react";

const ChildCard = ({ img, name, percent }) => {
  return (
    <div className="bg-white shadow overflow-hidden relative flex flex-col w-[265px] h-[360px]">
      <div className="relative w-full overflow-hidden flex-1">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0  text-white p-3">
          <h3 className="text-base md:text-lg">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs md:text-sm text-orange-300 ">
              View Info
            </span>
            <button className="flex items-center gap-1 bg-primary text-white px-3 py-2 rounded text-xs">
              <span>Sponsor</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-6 md:h-8 w-[265px] relative overflow-hidden"
        style={{
            background: `linear-gradient(to right, #eb8500 ${percent}%, #ffbd66 ${percent}%)`,
          }}
          
      >
        <div className="absolute inset-0 flex items-center ml-2 text-white text-sm font-semibold">
          {percent.toFixed(2)}% Sponsoreda
        </div>
      </div>
    </div>
  );
};

export default ChildCard;