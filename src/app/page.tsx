import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingLogo from "../../public/assets/home/Heading.png";
import { IoReorderTwoOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MainContainer from "@/components/home/MainContainer";
import FindVehicleInput from "@/components/inputs/FindVehicleInput";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#0F0F0F]">
        <MainContainer className=" border text-white">
          <nav className="flex items-center justify-between my-[22px] ">
            <IoReorderTwoOutline className="w-5 h-5 " />
            <Image src={HeadingLogo} alt="Heading does not show " />
            <Link href={`/auth/signUp`}>
              <button className="border border-white rounded-[48px] px-5 py-2 font-semibold border-opacity-50 ">
                Login/Register
              </button>
            </Link>
          </nav>
          <div className="flex flex-col w-full mt-[117px] mb-10 ">
            <h1 className="text-white text-[64px] leading-[120%] font-bold mb-10  ">
              Discover the world on <br /> wheels with our car
              <br /> rental service
            </h1>
            <p className="text-[18px] text-white leading-[160%] font-normal mb-6 ">
              Choose from a wide range of cars that fit your style and budget.
              <br />
              Experience the freedom of the open road with our reliable and{" "}
              <br />
              efficient rental service.
            </p>
            <span className=" h-[2px] max-w-[528px] bg-white opacity-[0.2] mb-[18px] "></span>
            <div className=" flex items-center gap-x-4 ">
              <div className=" bg-white p-[6px] rounded-3xl ">
                <MdOutlineArrowForwardIos className=" text-black w-[18px] h-[18px]  " />
              </div>
              <h3 className=" text-[18px] ">Contact us</h3>
            </div>
          </div>
        </MainContainer>
      </div>
      <MainContainer className=" flex items-center gap-x-4 rounded-[16px] px-6 py-[30px] opacity-90 bg-white shadow-[0_8px_8px_-4px_#101828]  ">
        <FindVehicleInput />
        <FindVehicleInput />
      </MainContainer>
    </div>
  );
};

export default Home;
