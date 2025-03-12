"use client";
import React from "react";
import InputField from "@/components/auth/InputField";
import AuthButton from "@/components/AuthButton";
import useSignUp from "@/hooks/useSignUp";
import Link from "next/link";
import { IMAGES } from "@/constants/images";

const SignUp = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    isChecked,
    setIsChecked,
    handleSignUp,
  } = useSignUp();

  return (
    <div className="dark:bg-[#1F2128] p-2 ">
      <div className=" max-w-[510px] min-w-[250px] mx-auto ">
        <h1 className="dark:text-white   text-[#242731] text-[30px] leading-[39.06px] font-bold mb-4 ">
          Get&apos;s started
        </h1>
        <p className="text-[18px] text-[#7c7c8d] leading-[23.44px] font-medium mb-10 max-xs:text-[16px] ">
          I have already an account?
          <Link href="/auth/signIn">
            <span className="text-[#a162f7] underline ">Sign in</span>
          </Link>
        </p>
        <div className="flex items-center gap-[14px] max-xs:flex-col ">
          <AuthButton
            className="border border-[#E6E8EC] dark:border-[#323745] rounded-lg dark:bg-[#1F2128] bg-white flex-1  py-5 flex items-center  justify-center gap-x-3 w-full "
            titleClassName="dark:text-[#E0E4E7] text-[#242731] leading-[20.83px] font-medium text-nowrap"
            src={IMAGES.GOOGLE_BTN}
            title="Sign-in with Google"
          />
          <AuthButton
            className="border border-[#E6E8EC] dark:border-none rounded-lg  bg-[#4776D0] flex-1 py-5 flex items-center justify-center gap-x-3 w-full"
            titleClassName="dark:text-[#E0E4E7] text-white text-[#242731] leading-[20.83px] font-medium text-nowrap"
            src={IMAGES.FACEBOOK_BTN}
            title="Sign-in with Facebook"
          />
        </div>
        <div className=" flex items-center gap-x-[14px] py-6 ">
          <span className="flex dark:bg-[#2C303D] bg-[#E6E8EC] h-[1px] flex-1 "></span>
          <span className="dark:text-[#E0E4E7] text-[#777E90] leading-[27px] text-[18px] font-medium ">
            or
          </span>
          <span className="dark:bg-[#2C303D] bg-[#E6E8EC] h-[1px] flex-1 "></span>
        </div>

        <div className="dark:bg-[#242731] bg-white dark:border-none border border-[#F4F5F6] rounded-[10px] py-5 pr-10 pl-5 flex flex-col gap-y-[14px] shadow-[0px_10px_110px_1px_rgba(59,59,59,0.08)] max-xs:p-4 ">
          <InputField
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            placeholder="Delowar"
            title="First Name"
          />
          <InputField
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            placeholder="Hossen"
            title="Last Name"
          />
          <InputField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="uistore@gmail.com"
            title="Email"
          />
          <InputField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="**********"
            title="Password"
          />
        </div>
        <div className="flex items-center justify-between my-6 ">
          <div className="flex  items-center gap-x-[13px]  ">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="text-[#B1B5C3] cursor-pointer "
            />
            <h3 className="text-[#B1B5C3] leading-[20.83px] font-medium  max-xs:text-[13px] ">
              Remember me
            </h3>
          </div>
          <h3 className="text-[#A162F7] leading-[20.83px] font-medium max-xs:text-[13px] ">
            Forgot your password?
          </h3>
        </div>

        <AuthButton
          onClick={handleSignUp}
          title="Sign up"
          imgSrcClassName="hidden"
          className=" bg-[#A162F7] py-[18px] w-full rounded-[10px] mt-[6px] text-[#FFFAF7] leading-[24.2px] font-bold text-[20px]"
          isChecked={loading}
        />
      </div>
    </div>
  );
};

export default SignUp;
