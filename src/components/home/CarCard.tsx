import React from "react";
import Image from "next/image";
// import { IMAGES } from "@/constants/images";
import CarCardImg1 from "../../../public/assets/home/carImg1.png";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { LiaGasPumpSolid } from "react-icons/lia";

const CarCard = () => {
  return (
    <div className="border border-[#0000001A] flex flex-col items-center bg-white rounded-[24px] max-w-[384px] ">
      <Image
        // src={IMAGES.CARCARDIMG1}
        src={CarCardImg1}
        alt="CARCARDIMG1 does not show"
        className="px-2 pt-2  "
        // width={123}
        // height={444}
      />

      <div className=" p-6 flex flex-col items-start w-full ">
        <h2 className="text-[20px] font-semibold leading-[150%] text-black opacity-80 mb-3 ">
          Audi A8 L 2022
        </h2>
        <h3 className="text-[32px] text-black font-bold leading-[120%] mb-4 ">
          78.90{" "}
          <span className=" text-[16px] text-[#00000080] font-semibold ">
            /day
          </span>
        </h3>
        <div className=" bg-[#F6F6F6] px-4 py-2 rounded-[16px] w-full flex items-center justify-around mb-5  ">
          <span className="flex flex-col items-center gap-y-[6px]  ">
            <BsSpeedometer2 className=" h-5 w-5 text-black " />
            <h6 className=" leading-[150%] text-[14px]  ">4,000</h6>
          </span>
          <span className="flex flex-col items-center gap-y-[6px]  ">
            <TbManualGearbox className=" h-5 w-5 text-black  " />
            <h6 className=" leading-[150%] text-[14px]  ">auto</h6>
          </span>
          <span className="flex flex-col items-center gap-y-[6px]  ">
            <LuUsers className=" h-5 w-5 text-black " />
            <h6 className=" leading-[150%] text-[14px]  ">4</h6>
          </span>
          <span className="flex flex-col items-center gap-y-[6px]  ">
            <LiaGasPumpSolid className=" h-5 w-5 text-black " />
            <h6 className=" leading-[150%] text-[14px]  ">Electric</h6>
          </span>
        </div>
        <button
          className=" border border-black rounded-[32px] text-center py-3 px-6 w-full leading-[100%] font-semibold hover:bg-[#242731]
        hover:text-white  "
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
