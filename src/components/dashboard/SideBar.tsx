"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TbLogout2 } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { IMAGES } from "@/constants/images";
import { MENU_ITEMS, USER_MENU_ITEMS } from "@/constants/data";
import { signOut } from "next-auth/react";
import useSideBar from "@/hooks/useSideBar";

interface SideBarPropsTypes {
  className?: string;
}

const SideBar: React.FC<SideBarPropsTypes> = ({ className }) => {
  const { pathname, userRole } = useSideBar();

  return (
    <aside
      className={` ${className} dark:bg-[#242731] flex flex-col justify-between w-[60px] md:w-[250px] h-screen fixed left-0 top-0 `}
    >
      <div>
        <div className="flex items-center p-6">
          <Image
            src={IMAGES.NAVBAR_MAIN_LOGO}
            width={100}
            height={60}
            className="  hidden md:block"
            alt="Navbar Logo does not show"
          />
        </div>
        <div className="px-3 pb-4 pt-5">
          <ul className="space-y-2 font-medium">
            {userRole === "USER"
              ? USER_MENU_ITEMS?.map(({ href, icon: Icon, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-x-2 p-2 rounded-lg 
                    ${
                      pathname === href
                        ? "dark:bg-[#292E3D] bg-[#F3F5F8]"
                        : "dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8]"
                    }`}
                    >
                      <span>
                        <Icon
                          className={`${
                            pathname === href
                              ? "dark:text-white"
                              : "text-[#72767C] "
                          }  text-[#72767C]  h-5 w-5 `}
                        />
                      </span>
                      <span
                        className={`   ${
                          pathname === href
                            ? "dark:text-white "
                            : "dark:hover:bg-[#292E3D] "
                        } text-[#5F6165] text-[14px] leading-[18.23px] font-medium md:block hidden`}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                ))
              : MENU_ITEMS?.map(({ href, icon: Icon, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-x-2 p-2 rounded-lg 
                    ${
                      pathname === href
                        ? "dark:bg-[#292E3D] bg-[#F3F5F8]"
                        : "dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8]"
                    }`}
                    >
                      <span>
                        <Icon
                          className={`${
                            pathname === href
                              ? "dark:text-white"
                              : "text-[#72767C] "
                          }  text-[#72767C]  h-5 w-5 `}
                        />
                      </span>
                      <span
                        className={`   ${
                          pathname === href
                            ? "dark:text-white "
                            : "dark:hover:bg-[#292E3D] "
                        } text-[#5F6165] text-[14px] leading-[18.23px] font-medium md:block hidden`}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center px-3">
        <ul className="flex flex-col gap-y-2 w-full ">
          <li>
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-x-2 p-2 rounded-lg 
                ${
                  pathname === "/dashboard/settings"
                    ? "dark:bg-[#292E3D] bg-[#F3F5F8]"
                    : "dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8]"
                }`}
            >
              <SlSettings
                className={` ${
                  pathname === "/dashboard/settings"
                    ? "dark:text-white"
                    : "text-[#72767C] "
                }  text-[#72767C]  h-5 w-5 `}
              />
              <span
                className={`${
                  pathname === "/dashboard/settings"
                    ? "dark:text-white "
                    : "dark:hover:bg-[#292E3D] "
                } text-[#5F6165] text-[14px] leading-[18.23px] font-medium hidden md:block`}
              >
                Settings
              </span>
            </Link>
          </li>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#292E3D]"
          >
            <TbLogout2 className="w-[20px] text-[#72767C]" />
            <span className="dark:hover:bg-[#292E3D] text-[#5F6165] text-[14px] leading-[18.23px] font-medium hidden md:block">
              Logout
            </span>
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
