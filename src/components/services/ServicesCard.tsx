import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServicesCardPropsTypes {
  imgSrc?: string | StaticImageData;
  title?: string;
  parts?: string;
  condition?: string;
  className?: string;
}

const ServicesCard: React.FC<ServicesCardPropsTypes> = ({
  imgSrc,
  title,
  parts,
  condition,
  className,
}) => {
  return (
    <div className="w-[180px] flex-1 flex flex-col items-start ">
      <Image
        src={imgSrc!}
        alt="oil img does not show"
        width={148}
        height={153}
      />
      <h2 className="dark:text-white text-black text-[20px] leading-[26.04px] font-bold mt-5 ">
        {title}
      </h2>
      <div className=" w-full flex items-center justify-between mt-4 ">
        <h4 className="dark:text-[#808191]  text-[#72767C] text-[14px] leading-[18.23px] font-medium ">
          {parts}
        </h4>
        <span className="bg-[#ECECEC] w-[1px] h-[20px] "></span>
        <h4 className="dark:text-[#808191] text-[#72767C] text-[14px] leading-[18.23px] font-medium">
          {condition}
        </h4>
      </div>

      <div className="mt-5 flex bg-[#F5F5F5] w-full h-[3px] rounded-lg ">
        <span className={` ${className} h-[5px] rounded-lg mt-[-1px] `}></span>
      </div>
    </div>
  );
};

export default ServicesCard;
