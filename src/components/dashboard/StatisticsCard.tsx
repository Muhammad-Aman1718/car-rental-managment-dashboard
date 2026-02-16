import Image from "next/image";
import React from "react";
import StatisticsBar from "../../../public/assets/dashboardImgs/statisticsBar.png";

interface StatisticsCardPropsTypes {
  heading?: string;
  para?: string;
  className1?: string;
  className2?: string;
  className3?: string;
}

const StatisticsCard: React.FC<StatisticsCardPropsTypes> = ({
  heading,
  para,
  className1,
  className2,
  className3,
}) => {
  return (
    <div className="dark:bg-[#242731] bg-white px-5 md:p-4 lg:px-[35px] mt-4 md:mt-6 rounded-[14px] py-4  flex flex-col items-center w-full">
      <div className="w-full">
        <h3 className="dark:text-white text-lg md:text-xl lg:text-[20px] text-[#242731] font-semibold">
          <span className="font-bold">{heading}</span> statistics
        </h3>

        <div
          className={`${className1} mt-4 md:mt-6 flex flex-col lg:flex-row items-center justify-between w-full`}
        >
          <div
            className={`${className2} flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-x-[10px]`}
          >
            {["Day", "Week", "Month"].map((label) => (
              <button
                key={label}
                className={`${className3} text-xs md:text-sm dark:text-[#808191] dark:focus:text-white text-[#5F6165] focus:bg-blue-500 focus:text-white py-1 px-3 rounded-[24px]`}
              >
                {label}
              </button>
            ))}
          </div>
          <h3 className="dark:text-white text-[#5F6165] text-sm md:text-base font-bold mt-3 md:mt-0 text-nowrap">
            {para}
          </h3>
        </div>

        <Image
          className="mt-4 w-full max-w-[300px] md:max-w-[400px] lg:max-w-full mx-auto"
          src={StatisticsBar}
          alt="Statistics img does not show"
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
