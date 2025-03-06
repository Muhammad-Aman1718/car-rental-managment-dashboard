import Image from "next/image";
import React from "react";
import { FaArrowsSpin } from "react-icons/fa6";
import { TfiSettings } from "react-icons/tfi";
import { SlEnergy } from "react-icons/sl";
import CarImg from "../../../public/assets/dashboardImgs/car.png";
import SquareArrow from "../../../public/assets/dashboardImgs/squareArrow.png";

interface RecommendCardPropsTypes {
  heading?: string;
  className?: string;
}

const RecommendCard: React.FC<RecommendCardPropsTypes> = ({
  heading,
  className,
}) => {
  return (
    <div
      className={`${className} mt-[32px] bg-[#E1DFA4] rounded-[14px] px-[27px]  py-[15px] space-y-[11px]  max-sm:py-[10px] max-sm:mt-[10px] `}
    >
      <div className="flex items-center gap-x-2.5">
        <FaArrowsSpin className="w-6 h-6 text-[#72767C] " />
        <h3 className="text-[#242731] leading-[20.83px] font-bold ">
          64% Recommend
        </h3>
      </div>
      <div className=" flex justify-center ">
        <Image src={CarImg} alt="Car img does not show" />
      </div>
      <div>
        <h2 className="mb-2 text-[20px] text-[#1F2128] leading-[26.04px] font-bold ">
          {heading}
        </h2>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4 ">
            <Image src={SquareArrow} alt="square arrow img does not show" />
            <h4 className="text-[#5D5F5E] text-[14px] leading-[18.23px] font-medium ">
              132K
            </h4>
            <TfiSettings />
            <SlEnergy />
          </div>
          <h3 className="text-[#5D5F5E] text-[14px] leading-[18.23px] font-medium ">
            $32/h
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
