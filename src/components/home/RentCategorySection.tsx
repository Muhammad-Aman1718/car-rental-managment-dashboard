import React, { JSX } from "react";
import ArrowBtn from "./ArrowBtn";
import { IoArrowForward } from "react-icons/io5";
import RentCategorySectionCard from "./RentCategorySectionCard";

interface RentCategorySectionPropsTypes {
  //   childern?: React.ReactNode;
  title?: string;
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  icon3?: JSX.Element;
  icon4?: JSX.Element;
  icon5?: JSX.Element;
  icon6?: JSX.Element;
  icon7?: JSX.Element;
  icon8?: JSX.Element;
  icon9?: JSX.Element;
  icon10?: JSX.Element;
  icon11?: JSX.Element;
  icon12?: JSX.Element;
}

const RentCategorySection: React.FC<RentCategorySectionPropsTypes> = ({
  title,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h1 className=" text-[24px] leading-[130%] font-bold tracking-[-2px] ">
          {title}
        </h1>
        <ArrowBtn
          className=" flex items-center gap-x-2 text-[14px] leading-[20px] font-semibold text-[#0F0F0F] "
          btnTitle="View all"
          icon={<IoArrowForward className=" w-5 h-5 " />}
        />
      </div>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(186px,1fr))] gap-5 ">
        <RentCategorySectionCard icon={icon1} btnTitle="Toyota" />
        <RentCategorySectionCard icon={icon2} btnTitle="Ford" />
        <RentCategorySectionCard icon={icon3} btnTitle="Tesla" />
        <RentCategorySectionCard icon={icon4} btnTitle="Volkswagen" />
        <RentCategorySectionCard icon={icon5} btnTitle="Honda" />
        <RentCategorySectionCard icon={icon6} btnTitle="Nissan" />
        <RentCategorySectionCard icon={icon7} btnTitle="Chevrolet" />
        <RentCategorySectionCard icon={icon8} btnTitle="BMW" />
        <RentCategorySectionCard icon={icon9} btnTitle="Mercedes-Benz" />
        <RentCategorySectionCard icon={icon10} btnTitle="Hyundai" />
        <RentCategorySectionCard icon={icon11} btnTitle="Audi" />
        <RentCategorySectionCard icon={icon12} btnTitle="KIA" />
      </div>
    </div>
  );
};

export default RentCategorySection;
