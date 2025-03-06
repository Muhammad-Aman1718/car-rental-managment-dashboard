import React from "react";
import Image from "next/image";
import FacebookLogo from "../../../public/assets/auth/facebookLogo.png";

const SignInWithFacebookBtn = () => {
  return (
    <button className="border border-[#E6E8EC] dark:border-none rounded-lg  bg-[#4776D0] flex-1 py-5 flex items-center justify-center gap-x-3 w-full ">
      <Image src={FacebookLogo} alt="Facebook logo does not show" />
      <h3 className="text-white leading-[20.83px] font-medium text-nowrap ">
        Sign in with Facebook
      </h3>
    </button>
  );
};

export default SignInWithFacebookBtn;
