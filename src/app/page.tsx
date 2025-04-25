import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingLogo from "../../public/assets/home/Heading.png";
import { IoReorderTwoOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
//  brands icon
import { SiToyota } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiHyundai } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiKia } from "react-icons/si";

import MainContainer from "@/components/home/MainContainer";
import FindVehicleInput from "@/components/inputs/FindVehicleInput";
import ArrowBtn from "@/components/home/ArrowBtn";
import RentCategorySection from "@/components/home/RentCategorySection";
import CatogoriesBtn from "@/components/home/CatogoriesBtn";
import CarCard from "@/components/home/CarCard";

const Home = () => {
  return (
    <div className="  h-[3000px] ">
      <div className=" h-[833px] bg-[#0F0F0F] relative z-10 ">
        <MainContainer className="text-white py-[22px] ">
          <nav className="flex items-center justify-between ">
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
      <MainContainer className="relative top-[-70px] z-50 flex items-end gap-x-4 rounded-[16px] px-6 py-[30px] bg-opacity-90 bg-white shadow-[0_8px_8px_-4px_#101828]  ">
        <FindVehicleInput
          className=" w-[283px] bg-white "
          title="Pick-up Location"
          placeholder="Search a Location"
          icon={<IoLocationOutline className="w-5 h-5 text-black  " />}
        />
        <FindVehicleInput
          className=" w-[180px] bg-white flex-row-reverse "
          inputClassName=" w-[110px] "
          title="Pick-up date"
          placeholder="12/12/2023"
          icon={<CiCalendar className="w-5 h-5 text-black   " />}
        />

        <FindVehicleInput
          className="w-[283px] bg-white "
          title="Pick-up Location"
          placeholder="Search a Location"
          icon={<IoLocationOutline className="w-5 h-5 text-black  " />}
        />
        <FindVehicleInput
          className=" w-[180px] bg-white flex-row-reverse "
          inputClassName=" w-[110px] "
          title="Pick-up date"
          placeholder="12/12/2023"
          icon={<CiCalendar className="w-5 h-5 text-black   " />}
        />
        <ArrowBtn
          className=" px-6 py-4 text-[16px] bg-[#242731] text-white rounded-[64px] "
          btnTitle="Find a Vehicle"
          icon={<IoArrowForward className=" w-[18px] h-[18px] " />}
        />
      </MainContainer>
      <MainContainer>
        <RentCategorySection
          title="Rent by Brands"
          icon1={<SiToyota className=" w-[54.85714340209961px] h-[36px]  " />}
          icon2={<SiFord className=" w-[54.85714340209961px] h-[36px]  " />}
          icon3={<SiTesla className=" w-[54.85714340209961px] h-[36px]  " />}
          icon4={
            <SiVolkswagen className=" w-[54.85714340209961px] h-[36px]  " />
          }
          icon5={<SiHonda className=" w-[54.85714340209961px] h-[36px]  " />}
          icon6={<SiNissan className=" w-[54.85714340209961px] h-[36px]  " />}
          icon7={
            <SiChevrolet className=" w-[54.85714340209961px] h-[36px]  " />
          }
          icon8={<SiBmw className=" w-[54.85714340209961px] h-[36px]  " />}
          icon9={<SiMercedes className=" w-[54.85714340209961px] h-[36px]  " />}
          icon10={<SiHyundai className=" w-[54.85714340209961px] h-[36px]  " />}
          icon11={<SiAudi className=" w-[54.85714340209961px] h-[36px]  " />}
          icon12={<SiKia className=" w-[54.85714340209961px] h-[36px]  " />}
        />
        <RentCategorySection title="Rent by body type" />
      </MainContainer>

      <div className=" bg-[#F5F5F5] py-[100px] ">
        <MainContainer className=" bg-[#F5F5F5]  ">
          <div className=" text-center  ">
            <h1 className="text-[48px] leading-[130%] text-[#0F0F0F] font-bold tracking-[-2px] mb-6">
              Our Impressive Collection of Cars
            </h1>
            <p className=" text-[18px] text-[#0F0F0F] leading-[160%] tracking-[-1px] text-center mb-12   ">
              Ranging from elegant sedans to powerful sports cars, all carefully
              selected to provide our <br /> customers with the ultimate driving
              experience.
            </p>
            <div className=" flex items-center justify-center gap-x-4  ">
              <CatogoriesBtn btnTitle="Popular Car" />
              <CatogoriesBtn btnTitle="Luxury Car" />
              <CatogoriesBtn btnTitle="Vintage Car" />
              <CatogoriesBtn btnTitle="Family Car" />
              <CatogoriesBtn btnTitle="Off-Road Car" />
            </div>
          </div>
          <div>
            <CarCard />
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default Home;
