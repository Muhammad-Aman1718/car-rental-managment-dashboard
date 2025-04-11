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
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={` ${className} w-full border p-2 rounded `}
        required={required}
      />
    </div>
  );
};

export default CarDataFormInput;
