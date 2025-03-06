import React from "react";
interface ButtonPropstypes {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const SignInButton: React.FC<ButtonPropstypes> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${className} bg-[#A162F7] py-[18px] w-full rounded-[10px] mt-[6px] text-[#FFFAF7] leading-[24.2px] font-bold text-[20px]  `}
    >
      {title}
    </button>
  );
};

export default SignInButton;
