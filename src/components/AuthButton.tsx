import React from "react";
import Loader from "./Loader";
import Image, { StaticImageData } from "next/image";

interface ButtonPropstypes {
  title?: string;
  className?: string;
  src?: string | StaticImageData;
  imgSrcClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
  isChecked?: boolean;
}

const AuthButton: React.FC<ButtonPropstypes> = ({
  title,
  className,
  titleClassName,
  onClick,
  isChecked,
}) => {
  return (
    <button onClick={onClick} className={` ${className}`}>
      <h3 className={`${titleClassName} `}>{isChecked ? <Loader /> : title}</h3>
    </button>
  );
};

export default AuthButton;
