import React, { JSX } from "react";

interface FindVehicleInputPropsTypes {
  title?: string;
  placeholder?: string;
  icon?: JSX.Element;
}

const FindVehicleInput: React.FC<FindVehicleInputPropsTypes> = ({
  title,
  placeholder,
  icon,
}) => {
  return (
    <div className=" flex items-center gap-x-4 ">
      <div className="flex flex-col ">
        <h3 className="opacity-80 leading-[100%] mb-[10px] ">
          {title}
        </h3>
        <div className="  border border-[#0000001A] flex items-center gap-x-3 p-4 rounded-lg   ">
          {icon}
          <input
            type="text"
            placeholder={placeholder}
            className=" placeholder:text-black placeholder:leading-[24px] "
          />
        </div>
      </div>
      {/* <div>
        <h3 className=" opacity-80 leading-[100%] "></h3>
        <div className=" flex">
          <input type="text" placeholder="12/12/2023" />
          <CiCalendar className="w-5 h-5 text-black   " />
        </div>
      </div> */}
    </div>
  );
};

export default FindVehicleInput;
