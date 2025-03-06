import React from "react";
import Image from "next/image";
import GoogleLogo from "../../../public/assets/auth/googleLogo.png";

const SignInWithGoogleBtn = () => {
  return (
    <button className="border border-[#E6E8EC] dark:border-[#323745] rounded-lg dark:bg-[#1F2128]  bg-white flex-1  py-5 flex items-center  justify-center gap-x-3 w-full ">
      <Image src={GoogleLogo} alt="Google logo does not show" />
      <h3 className="dark:text-[#E0E4E7] text-[#242731] leading-[20.83px] font-medium text-nowrap ">
        Sign in with Google
      </h3>
    </button>
  );
};

export default SignInWithGoogleBtn;
