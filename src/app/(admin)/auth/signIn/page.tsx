"use client";
import React from "react";
import InputField from "@/components/auth/InputField";
import AuthButton from "@/components/AuthButton";
import useSignIn from "@/hooks/auth/useSignIn";
import Link from "next/link";

const SignIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    isChecked,
    setIsChecked,
    handleSubmit,
  } = useSignIn();

  return (
    <div className="h-screen dark:bg-[#1F2128] p-20 max-sm:p-4  ">
      <div className="max-w-[510px] min-w-[250px] m-auto ">
        <h1 className="dark:text-white text-[#242731] text-[30px] leading-[39.06px] font-bold mb-4 ">
          Get&apos;s started
        </h1>
        <p className="text-[18px] text-[#7c7c8d] leading-[23.44px] font-medium mb-10 max-xs:text-[16px] ">
          Don&apos;t have an account?
          <Link href="/auth/signUp">
            <span className="text-[#a162f7]  underline ">Sign up</span>
          </Link>
        </p>
        <div className=" flex items-center gap-x-[14px] py-6 ">
          <span className="flex dark:bg-[#2C303D] bg-[#E6E8EC] h-[1px] flex-1 "></span>
          <span className="dark:text-[#E0E4E7] text-[#777E90] leading-[27px] text-[18px] font-medium ">
            or
          </span>
          <span className="dark:bg-[#2C303D] bg-[#E6E8EC] h-[1px] flex-1 "></span>
        </div>

        <div className="dark:bg-[#242731] bg-white border dark:border-none border-[#F4F5F6] rounded-[10px] py-5 pr-10 pl-5 flex flex-col gap-y-[14px] shadow-[0px_10px_110px_1px_rgba(59,59,59,0.08)] max-xs:p-4 ">
          <InputField
            value={email}
            type="email"
            placeholder="uistore@gmail.com"
            title="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            value={password}
            type="password"
            placeholder="**********"
            title="Password"
            onChange={(e) => setPassword(e.target.value)}
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
            <h3 className="text-[#B1B5C3] leading-[20.83px] font-medium text-nowrap max-xs:text-[13px] ">
              Remember me
            </h3>
          </div>
          <h3 className="text-[#A162F7] leading-[20.83px] font-medium text-nowrap max-xs:text-[13px] ">
            Forgot your password?
          </h3>
        </div>

        <AuthButton
          className=" bg-[#A162F7] py-[18px] w-full rounded-[10px] mt-[6px] text-[#FFFAF7] leading-[24.2px] font-bold text-[20px]"
          onClick={handleSubmit}
          title="Sign in"
          isChecked={loading}
        />
      </div>
    </div>
  );
};

export default SignIn;
