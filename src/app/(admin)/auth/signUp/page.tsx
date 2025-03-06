"use client";
import InputField from "@/components/auth/InputField";
import SignInButton from "@/components/auth/SignInButton";
import SignInWithFacebookBtn from "@/components/auth/SignInWithFacebookBtn";
import SignInWithGoogleBtn from "@/components/auth/SignInWithGoogleBtn";
import useSignUp from "@/hooks/useSignUp";
import React from "react";

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
    handleSignUp,
  } = useSignUp();

  return (
    <div className="dark:bg-[#1F2128] p-2 ">
      <div className=" max-w-[510px] min-w-[250px] mx-auto ">
        <h1 className="dark:text-white   text-[#242731] text-[30px] leading-[39.06px] font-bold mb-4 ">
          Get's started
        </h1>
        <p className="text-[18px] text-[#7c7c8d] leading-[23.44px] font-medium mb-10 max-xs:text-[16px] ">
          I have already an account?
          <span className="text-[#a162f7] ">Sign in</span>
        </p>
        <div className="flex items-center gap-[14px] max-xs:flex-col ">
          <SignInWithGoogleBtn />
          <SignInWithFacebookBtn />
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
            <input type="checkbox" className="text-[#B1B5C3]  " />
            <h3 className="text-[#B1B5C3] leading-[20.83px] font-medium  max-xs:text-[13px] ">
              Remember me
            </h3>
          </div>
          <h3 className="text-[#A162F7] leading-[20.83px] font-medium max-xs:text-[13px] ">
            Forgot your password?
          </h3>
        </div>

        <SignInButton onClick={handleSignUp} title="Sign up" />
      </div>
    </div>
  );
};

export default SignUp;
