"use client";
import React from "react";
import InputField from "@/components/auth/InputField";
import AuthButton from "@/components/AuthButton";
import useSignIn from "@/hooks/auth/useSignIn";
import Link from "next/link";
import { IMAGES } from "@/constants/images";

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
    <div className="dark:bg-[#1F2128] p-2 border  ">
      <div className="border max-w-[510px] min-w-[250px] m-auto ">
        <h1 className="dark:text-white text-[#242731] text-[30px] leading-[39.06px] font-bold mb-4 ">
          Get&apos;s started
        </h1>
        <p className="text-[18px] text-[#7c7c8d] leading-[23.44px] font-medium mb-10 max-xs:text-[16px] ">
          Don&apos;t have an account?
          <Link href="/auth/signUp">
            <span className="text-[#a162f7]  underline ">Sign up</span>
          </Link>
        </p>
        <div className="flex items-center gap-[14px]   max-xs:flex-col ">
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
          imgSrcClassName="hidden"
          isChecked={loading}
        />
      </div>
    </div>
  );
};

export default SignIn;

// import InputField from "@/components/auth/InputField";
// import SignInButton from "@/components/auth/SignInButton";
// import SignInWithFacebookBtn from "@/components/auth/SignInWithFacebookBtn";
// import SignInWithGoogleBtn from "@/components/auth/SignInWithGoogleBtn";
// import React from "react";

// const SignIn = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-100">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-4 text-center">
//           Get Started
//         </h1>
//         <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
//           Don't have an account?{" "}
//           <span className="text-purple-500 cursor-pointer">Sign up</span>
//         </p>

//         {/* Social Sign-In Buttons */}
//         <div className="flex flex-col sm:flex-row items-center gap-3">
//           <SignInWithGoogleBtn />
//           <SignInWithFacebookBtn />
//         </div>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <span className="flex-1 h-[1px] bg-gray-300"></span>
//           <span className="text-gray-500 mx-3">or</span>
//           <span className="flex-1 h-[1px] bg-gray-300"></span>
//         </div>

//         {/* Input Fields */}
//         <div className="space-y-4">
//           <InputField
//             type="email"
//             placeholder="yourmail@example.com"
//             title="Email"
//           />
//           <InputField type="password" placeholder="********" title="Password" />
//         </div>

//         {/* Remember Me & Forgot Password */}
//         <div className="flex items-center justify-between mt-4">
//           <label className="flex items-center space-x-2 text-gray-600">
//             <input type="checkbox" className="accent-purple-500" />
//             <span className="text-sm">Remember me</span>
//           </label>
//           <span className="text-purple-500 text-sm cursor-pointer">
//             Forgot password?
//           </span>
//         </div>

//         {/* Sign In Button */}
//         <SignInButton title="Sign in" className="w-full mt-6" />
//       </div>
//     </div>
//   );
// };

// export default SignIn;
