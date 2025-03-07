import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import ThemeToggle from "../ThemeToggleBtn";

interface NavbarPropsTypes {
  className?: string;
}

const Navbar: React.FC<NavbarPropsTypes> = ({ className }) => {
  return (
    <>
      <div
        className={` ${className}  fixed top-0 left-0 md:left-[250px] w-full md:w-[calc(100%-250px)] dark:bg-[#242731] bg-white py-4 px-6  flex items-center justify-between `}
      >
        <div className="dark:bg-[#1F2128] bg-[#F5F4F6] flex items-center gap-x-4 rounded-md py-2 px-4 w-[250px]">
          <RiSearchLine className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search or type"
            className="dark:bg-[#1F2128] dark:text-white bg-[#F5F4F6] text-sm font-medium w-full placeholder:border  border-l-2 border-[#EF9011] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-x-6">
          <ThemeToggle />

          <IoNotificationsOutline className="text-gray-600 h-6 w-6 cursor-pointer" />

          <Image
            src={IMAGES.PROFILE_IMG}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
