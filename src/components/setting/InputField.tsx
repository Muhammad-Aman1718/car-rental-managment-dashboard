import { useAppSelector } from "@/store/store";
import React, { ReactNode } from "react";
import Loader from "../Loader";

interface InputFieldPropsTypes {
  icon?: ReactNode;
  title?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldPropsTypes> = ({
  icon,
  title,
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  const loader = useAppSelector((state) => state.userDataReducer.loading);

  return (
    <div className="">
      <h2 className="dark:text-[#E0E4E7] text-[#7C7C8D] text-[14px] leading-[18.23px] font-medium mb-2.5 ">
        {title}
      </h2>
      <div className=" border border-[#E9EAEC] dark:border-[#2C303D] py-3 px-[14px] rounded-[10px] flex items-center gap-x-2.5  ">
        {icon}
        <input
          value={value}
          onChange={onChange}
          className="outline-none w-full bg-white  placeholder:text-[14px] dark:text-white dark:placeholder:text-[#7C7C8D] dark:bg-[#242731] placeholder:text-[#5F6165] placeholder:leading-[18.23px] placeholder:font-medium      "
          type="text"
          placeholder={placeholder}
          disabled={disabled}
        />

        {loader && <Loader />}
      </div>
    </div>
  );
};

export default InputField;
