import Image, { StaticImageData } from "next/image";
import React from "react";
import pieChart from "../../../public/assets/dashboardImgs/pieChart.png";

interface PerformanceCardPropsTypes {
  className1?: string;
  className2?: string;
  heading?: string;
  src?: string | StaticImageData;
}

const PerformanceCard: React.FC<PerformanceCardPropsTypes> = ({
  className1,
  className2,
  heading,
  src,
}) => {
  return (
    <div
      className={` ${className1} dark:bg-[#242731] flex flex-col justify-between items-center gap-y-[30px] rounded-2xl py-[22.5px] px-[60px] `}
    >
      <div className="flex flex-col justify-between items-center gap-y-[10px] ">
        <span>
          <Image
            src={src!}
            alt="performanceCardImg1 does not show"
            fill
            className="object-cover"
          />
        </span>
        <h3
          className={` ${className2} text-[24px] leading-[31.25px] font-bold text-nowrap `}
        >
          {heading}
        </h3>
      </div>
      <Image
        src={pieChart}
        alt="pie chart does not show"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default PerformanceCard;
