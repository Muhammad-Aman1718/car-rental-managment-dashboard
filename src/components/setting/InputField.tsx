import React, { ReactNode } from "react";
import { FiHome } from "react-icons/fi";

interface InputFieldPropsTypes {
  icon?: ReactNode;
  title?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldPropsTypes> = ({
  icon,
  title,
  placeholder,
}) => {
  return (
    <div className="">
      <h2 className="dark:text-[#E0E4E7] text-[#7C7C8D] text-[14px] leading-[18.23px] font-medium mb-2.5 ">
        {title}
      </h2>
      <div className=" border border-[#E9EAEC] dark:border-[#2C303D] py-3 px-[14px] rounded-[10px] flex items-center gap-x-2.5  ">
        {icon}
        <input
          className=" outline-none placeholder:text-[14px] dark:placeholder:text-[#7C7C8D] dark:bg-[#242731] placeholder:text-[#5F6165] placeholder:leading-[18.23px] placeholder:font-medium      "
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
