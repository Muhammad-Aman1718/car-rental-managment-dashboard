import React from "react";
import ArrowBtn from "./ArrowBtn";
import { IoArrowForward } from "react-icons/io5";
import RentCategorySectionCard from "./RentCategorySectionCard";

interface RentCategorySectionPropsTypes {
  //   childern?: React.ReactNode;
}

const RentCategorySection: React.FC<RentCategorySectionPropsTypes> = ({}) => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h1 className=" text-[24px] leading-[130%] font-bold tracking-[-2px] ">
          Rent by Brands
        </h1>
        <ArrowBtn
          className=" flex items-center gap-x-2 text-[14px] leading-[20px] font-semibold text-[#0F0F0F] "
          btnTitle="View all"
          icon={<IoArrowForward className=" w-5 h-5 " />}
        />
      </div>
      <div className=" grid ">
        <RentCategorySectionCard />
      </div>
    </div>
  );
};

export default RentCategorySection;
