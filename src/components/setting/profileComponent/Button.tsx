import React from "react";
interface ButtonPropsTypes {
  title?: string;
}

const Button: React.FC<ButtonPropsTypes> = ({ title }) => {
  return (
    <button className="text-[#7C7C8D] text-[14px] leading-[18.23px] font-medium hover:text-[#A162F7]  ">
      {title}
    </button>
  );
};

export default Button;
