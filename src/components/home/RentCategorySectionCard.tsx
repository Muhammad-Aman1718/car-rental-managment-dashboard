import React, { JSX } from "react";
import { SiToyota } from "react-icons/si";

interface RentCategorySectionCardPropsTypes {
  icon?: JSX.Element;
  btnTitle?: string;
}

const RentCategorySectionCard: React.FC<RentCategorySectionCardPropsTypes> = ({
  icon,
  btnTitle,
}) => {
  return (
    <div className=" flex flex-col items-center gap-y-3 bg-[#0F0F0F0D] py-6 rounded-lg w-[1 ">
      {icon}
      <h3 className=" leading-[24px] font-medium ">{btnTitle}</h3>
    </div>
  );
};

export default RentCategorySectionCard;
