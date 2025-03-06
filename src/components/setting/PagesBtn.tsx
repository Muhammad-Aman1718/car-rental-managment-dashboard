import React from "react";

interface PagesBtnPropsTypes {
  className?: string;
  heading?: string;
  onClick?: () => void;
}

const PagesBtn: React.FC<PagesBtnPropsTypes> = ({
  heading,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-[#5F6165] rounded-[4px] px-[14px] py-[6px]  leading-[23.44px] text-[18px] font-medium `}
    >
      {heading}
    </button>
  );
};

export default PagesBtn;
