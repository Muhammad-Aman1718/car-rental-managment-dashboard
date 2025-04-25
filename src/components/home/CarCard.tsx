import React from "react";
import Image from "next/image";
// import { IMAGES } from "@/constants/images";
import CarCardImg1 from "../../../public/assets/home/carImg1.png";
import { BsSpeedometer2 } from "react-icons/bs";

const CarCard = () => {
  return (
    <div className="bg-white ">
      <Image
        // src={IMAGES.CARCARDIMG1}
        src={CarCardImg1}
        alt="CARCARDIMG1 does not show"
        className="px-2 pt-2 "
        // width={123}
        // height={444}
      />

      <div className=" m-6  ">
        <h2 className="text-[20px] font-semibold leading-[150%] text-black opacity-80 ">
          Audi A8 L 2022
        </h2>
        <h3 className="text-[32px] text-black font-bold leading-[120%]  ">
          78.90 <span className=" text-[16px] text-[#00000080] font-semibold ">/day</span>
        </h3>
        <div className=" bg-[#F6F6F6] px-4 py-2 rounded-[16px]  ">
          <span className="flex flex-col items-center  ">
            <BsSpeedometer2 className=" h-5 w-5 text-black " />
            <h6 className="   ">4,000</h6>
          </span>
        </div>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
