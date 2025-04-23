import React from "react";
import ArrowBtn from "./ArrowBtn";
import { IoArrowForward } from "react-icons/io5";
import RentCategorySectionCard from "./RentCategorySectionCard";
import { SiToyota } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiHyundai } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiKia } from "react-icons/si";

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
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(186px,1fr))] gap-5 ">
        <RentCategorySectionCard
          icon={<SiToyota className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Toyota"
        />
        <RentCategorySectionCard
          icon={<SiFord className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Ford"
        />
        <RentCategorySectionCard
          icon={<SiTesla className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Tesla"
        />
        <RentCategorySectionCard
          icon={
            <SiVolkswagen className=" w-[54.85714340209961px] h-[36px]  " />
          }
          btnTitle="Volkswagen"
        />
        <RentCategorySectionCard
          icon={<SiHonda className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Honda"
        />
        <RentCategorySectionCard
          icon={<SiNissan className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Nissan"
        />
        <RentCategorySectionCard
          icon={<SiChevrolet className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Chevrolet"
        />
        <RentCategorySectionCard
          icon={<SiBmw className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="BMW"
        />
        <RentCategorySectionCard
          icon={<SiMercedes className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Mercedes-Benz"
        />
        <RentCategorySectionCard
          icon={<SiHyundai className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Hyundai"
        />
        <RentCategorySectionCard
          icon={<SiAudi className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="Audi"
        />
        <RentCategorySectionCard
          icon={<SiKia className=" w-[54.85714340209961px] h-[36px]  " />}
          btnTitle="KIA"
        />
      </div>
    </div>
  );
};

export default RentCategorySection;
