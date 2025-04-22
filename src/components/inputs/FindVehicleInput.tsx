import React, { JSX } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

interface FindVehicleInputPropsTypes {
  title?: string;
  placeholder?: string;
  icon?: JSX.Element;
}

const FindVehicleInput = () => {
  return (
    <div className=" flex items-center gap-x-4 ">
      <div className="flex flex-col ">
        <h3 className="opacity-80 leading-[100%] mb-[10px] ">
          Pick-up Location
        </h3>
        <div className="  border border-[#0000001A] flex items-center gap-x-3 p-4 rounded-lg   ">
          <IoLocationOutline className="w-5 h-5 text-black  " />
          <input
            type="text"
            placeholder="Search a Location"
            className=" placeholder:text-black placeholder:leading-[24px] "
          />
        </div>
      </div>
      <div>
        <h3 className=" opacity-80 leading-[100%] ">Pick-up date</h3>
        <div className=" flex">
          <input type="text" placeholder="12/12/2023" />
          <CiCalendar className="w-5 h-5 text-black   " />
        </div>
      </div>
    </div>
  );
};

export default FindVehicleInput;
