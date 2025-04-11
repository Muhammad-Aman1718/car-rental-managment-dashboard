import React from "react";

interface carDataFormInputPropsTypes {
  divStyle?: string;
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const CarDataFormInput: React.FC<carDataFormInputPropsTypes> = ({
  divStyle,
  label,
  type,
  name,
  placeholder,
  className,
  required,
}) => {
  return (
    <div className={divStyle}>
      <label
        htmlFor=""
        className="dark:text-[#E0E4E7] text-[#7C7C8D] text-[14px] leading-[18.23px] font-medium mb-2.5  "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={` ${className} outline-none w-full bg-white  placeholder:text-[14px] dark:text-white dark:placeholder:text-[#7C7C8D] dark:bg-[#242731] placeholder:text-[#5F6165] placeholder:leading-[18.23px] placeholder:font-medium 
 `}
        required={required}
      />
    </div>
  );
};

export default CarDataFormInput;
