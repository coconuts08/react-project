import React from "react";

const TeacherCard = ({ img, name, position }) => {
  return (
    <div className="bg-white shadow overflow-hidden flex flex-col w-[265px] h-[360px]">
      {/* Image container */}
      <div className="w-full h-[250px]">
        <img src={img} alt={name} className="w-full h-full object-cover object-top" />
      </div>

      {/* Name and position */}
      <div className="flex flex-col items-center justify-center p-4 flex-1">
        <h3 className="text-base md:text-lg text-black">{name}</h3>
        <span className="text-xs md:text-sm text-black mt-1">{position}</span>
      </div>
    </div>
  );
};

export default TeacherCard;
