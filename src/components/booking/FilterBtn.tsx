import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface FilterBtnPropsTypes {
  heading?: string;
  className?: string;
}

const FilterBtn: React.FC<FilterBtnPropsTypes> = ({ heading, className }) => {
  return (
    <div
      className={`  flex items-center gap-x-6 rounded-[22.5px] dark:bg-[#242731] bg-white px-[20px] py-[6px] `}
    >
      <h3
        className={`${className} dark:text-white text-[#5F6165] leading-[24px] font-medium  `}
      >
        {heading}
      </h3>
      <IoMdArrowDropdown className="h-6 w-6 text-[#5F6165] dark:text-[#373C4A] " />
    </div>
  );
};

export default FilterBtn;
