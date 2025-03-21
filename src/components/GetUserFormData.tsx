import Image from "next/image";
import React from "react";
import Button from "./setting/profileComponent/Button";
import InputField from "./setting/InputField";
import { FiHome } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoIosMale } from "react-icons/io";
import { IMAGES } from "@/constants/images";

const GetUserFormData = () => {
  return (
    <div className=" absolute  mt-12 px-4 md:px-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="dark:text-white text-[#242731] text-xl font-bold mb-2">
          Profile
        </h1>
        <p className="dark:text-[#7C7C8D] text-[#5F6165] text-sm">
          Update your photo and personal details here.
        </p>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Input Fields */}
      <div className="max-w-3xl flex flex-col gap-y-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            icon={<FiHome className=" max-sm:hidden w-6 h-6 text-[#5F6165]" />}
            title="Live in"
            placeholder="Zuichi, Switzerland"
          />
          <InputField
            icon={<FiHome className="max-sm:hidden w-6 h-6 text-[#5F6165]" />}
            title="Street Address"
            placeholder="2445 Crosswind Drive"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            icon={<LiaBirthdayCakeSolid className="w-6 h-6 text-[#5F6165]" />}
            title="Date Of Birth"
            placeholder="07.12.195"
          />
          <InputField
            icon={<IoIosMale className="w-6 h-6 text-[#5F6165]" />}
            title="Gender"
            placeholder="Male"
          />
        </div>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Profile Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl my-6 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div>
            <h2 className="text-[#242731] font-medium">Your Photo</h2>
            <p className="text-[#7C7C8D] text-sm">
              This will be displayed on your profile
            </p>
          </div>
          <Image
            src={IMAGES.PROFILE_IMG}
            alt="Profile image"
            width={24}
            height={24}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex gap-4">
          <Button title="Delete" />
          <Button title="Update" />
        </div>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Social Profiles
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
        <h2 className="text-[#242731] font-medium">Social Profiles</h2>
        <div className="w-full max-w-lg">
          <div className="border dark:border-[#2C303D] border-[#E9EAEC]  mb-4 py-3 px-4 rounded-lg flex items-center">
            <input
              className="w-full outline-none placeholder:text-sm dark:placeholder:text-[#7C7C8D] dark:bg-[#242731] text-[#5F6165]"
              type="text"
              placeholder="facebook.com/"
            />
          </div>
          <div className="border dark:border-[#2C303D] border-[#E9EAEC] py-3 px-4 rounded-lg flex items-center">
            <input
              className="w-full outline-none placeholder:text-sm dark:placeholder:text-[#7C7C8D] dark:bg-[#242731]  text-[#5F6165]"
              type="text"
              placeholder="twitter.com/"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GetUserFormData;
