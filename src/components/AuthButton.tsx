import { useAppSelector } from "@/store/store";
import React from "react";
import Loaders from "./Loaders";
interface ButtonPropstypes {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const AuthButton: React.FC<ButtonPropstypes> = ({
  title,
  className,
  onClick,
}) => {
  const loading = useAppSelector((state) => state.authReducer.loading);

  return (
    <button
      onClick={onClick}
      className={` ${className} bg-[#A162F7] py-[18px] w-full rounded-[10px] mt-[6px] text-[#FFFAF7] leading-[24.2px] font-bold text-[20px]  `}
    >
      {loading ? <Loaders /> : title}
    </button>
  );
};

export default AuthButton;
