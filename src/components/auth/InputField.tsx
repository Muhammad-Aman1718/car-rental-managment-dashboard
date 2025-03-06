"use client";
import React, { useState } from "react";
import { CgEye } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa";

interface InputFieldPropsTypes {
  title?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldPropsTypes> = ({
  title,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      <h2 className="leading-[20.83px] dark:text-[#E0E4E7] text-[#242731] font-medium mb-3 ">
        {title}
      </h2>
      <div className=" border border-[#B1B5C3] dark:border-[#323745] rounded-[10px] py-[19px] px-5 flex items-center justify-between  ">
        <input
          onChange={onChange}
          value={value}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className="placeholder:text-[#777E90] dark:placeholder:text-[#E0E4E7] dark:text-[#E0E4E7] dark:bg-[#242731]  placeholder:leading-[20.83px] outline-none w-full "
        />

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword
            ? title === "Password" && (
                <CgEye className=" w-5 h-4 text-[#777E90] " />
              )
            : title === "Password" && (
                <FaRegEyeSlash className=" w-5 h-4 text-[#777E90] " />
              )}
        </button>
      </div>
    </div>
  );
};

export default InputField;
