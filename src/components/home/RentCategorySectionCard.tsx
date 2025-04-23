import React from "react";
import { SiToyota } from "react-icons/si";

const RentCategorySectionCard = () => {
  return (
    <div className=" flex flex-col items-center gap-y-3 bg-[#0F0F0F0D] py-6 rounded-lg w-[1 ">
      <SiToyota className=" w-[54.85714340209961px] h-[36px]  " />
      <h3 className=" leading-[24px] font-medium ">Toyota</h3>
    </div>
  );
};

export default RentCategorySectionCard;
