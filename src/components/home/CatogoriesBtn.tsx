import React from "react";

interface CatogoriesBtnPropsTypes {
  btnTitle?: string;
  className?: string;
}
const CatogoriesBtn: React.FC<CatogoriesBtnPropsTypes> = ({
  btnTitle,
  className,
}) => {
  return (
    <button
      className={`${className} border border-[#0000000D] rounded-[58px] w-[140px] bg-white text-black font-medium text-[18px] leading-[26px] text-center py-3 hover:bg-[#242731] hover:text-white `}
    >
      {btnTitle}
    </button>
  );
};

export default CatogoriesBtn;
