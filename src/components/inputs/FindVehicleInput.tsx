import React, { JSX } from "react";

interface FindVehicleInputPropsTypes {
  className?: string;
  inputClassName?: string;
  title?: string;
  placeholder?: string;
  icon?: JSX.Element;
}

const FindVehicleInput: React.FC<FindVehicleInputPropsTypes> = ({
  className,
  inputClassName,
  title,
  placeholder,
  icon,
}) => {
  return (
    <div className="flex flex-col justify-center ">
      <h3 className="opacity-80 leading-[100%] mb-[10px] ">{title}</h3>
      <div
        className={` ${className}  border border-[#0000001A] flex items-center gap-x-3 p-4 rounded-lg  `}
      >
        {icon}
        <input
          type="text"
          placeholder={placeholder}
          className={`${inputClassName} placeholder:text-black placeholder:leading-[24px] `}
        />
      </div>
    </div>
  );
};

export default FindVehicleInput;
