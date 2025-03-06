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
      <Image src={imgSrc!} alt="oil img does not show" />
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

    // <div className="w-full md:w-[180px] flex flex-col items-start">
    //   {/* Image Section */}
    //   <Image src={imgSrc!} alt="img does not show" />

    //   {/* Title */}
    //   <h2 className="text-black text-[16px] md:text-[20px] leading-[1.3] font-bold mt-3 md:mt-5">
    //     {title}
    //   </h2>

    //   {/* Parts & Condition Row */}
    //   <div className="w-full flex items-center justify-between gap-2 mt-2 md:mt-4">
    //     <h4 className="text-[#72767C] text-[12px] md:text-[14px] leading-[1.3] font-medium">
    //       {parts}
    //     </h4>
    //     <span className="bg-[#ECECEC] w-px h-[16px] md:h-[20px]"></span>
    //     <h4 className="text-[#72767C] text-[12px] md:text-[14px] leading-[1.3] font-medium">
    //       {condition}
    //     </h4>
    //   </div>

    //   {/* Progress Bar */}
    //   <div className="mt-3 md:mt-5 bg-[#F5F5F5] w-full h-[2px] md:h-[3px] rounded-lg">
    //     <span
    //       className={`${className} h-[3px] md:h-[5px] rounded-lg -mt-px block`}
    //     ></span>
    //   </div>
    // </div>
  );
};

export default ServicesCard;
