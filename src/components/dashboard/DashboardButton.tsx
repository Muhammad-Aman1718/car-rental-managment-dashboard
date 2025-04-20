import React from "react";

interface ButtonPropsTypes {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonPropsTypes> = ({ title, className, onClick }) => {
  return (
    <button
      className={` ${className} text-white py-[6px] px-3 bg-[#A162F7] rounded-[6px]  `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
