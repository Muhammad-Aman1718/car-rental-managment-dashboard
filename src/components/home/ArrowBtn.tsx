import React, { JSX } from "react";

interface ArrowBtnPropsTypes {
  btnTitle?: string;
  className?: string;
 
  icon?: JSX.Element;
}

const ArrowBtn: React.FC<ArrowBtnPropsTypes> = ({
  btnTitle,
  className,
  icon,
}) => {
  return (
    <button className={`${className}  flex items-center  `}>
      {btnTitle}
      {icon}
    </button>
  );
};

export default ArrowBtn;
