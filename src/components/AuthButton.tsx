import React from "react";
import Loaders from "./Loaders";
interface ButtonPropstypes {
  title?: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean; // ✅ Add Loading Prop
}

const AuthButton: React.FC<ButtonPropstypes> = ({
  title,
  className,
  onClick,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${className} bg-[#A162F7] py-[18px] w-full rounded-[10px] mt-[6px] text-[#FFFAF7] leading-[24.2px] font-bold text-[20px]  `}
    >
      {loading ? <Loaders /> : title} {/* ✅ Show Loader */}
    </button>
  );
};

export default AuthButton;
