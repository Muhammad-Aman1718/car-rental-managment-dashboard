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
  imgSrcClassName,
  titleClassName,
  src,
  onClick,
  isChecked,
}) => {
  return (
    <button onClick={onClick} className={` ${className}`}>
      <Image
        src={src!}
        alt="logo does not show"
        className={imgSrcClassName}
        width={30}
        height={30}
      />
      <h3 className={`${titleClassName} `}>{isChecked ? <Loader /> : title}</h3>
    </button>
  );
};

export default AuthButton;
