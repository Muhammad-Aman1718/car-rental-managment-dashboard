import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const FindVehicleInput = () => {
  return (
    <div>
      <div>
        <h3 className="opacity-80 leading-[100%]  ">Pick-up Location</h3>
        <div>
          <IoLocationOutline />
          <input type="text" />
        </div>
      </div>
      <div>
        <h3>Pick-up date</h3>
        <div>
          <input type="text" />
          <CiCalendar />
        </div>
      </div>
    </div>
  );
};

export default FindVehicleInput;
