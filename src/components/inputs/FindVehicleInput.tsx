import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const FindVehicleInput = () => {
  return (
    <div className=" flex ">
      <div className="  ">
        <h3 className="opacity-80 leading-[100%]  ">Pick-up Location</h3>
        <div className=" flex ">
          <IoLocationOutline className="w-5 h-5 text-black  " />
          <input type="text" placeholder="Search a Location" />
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
