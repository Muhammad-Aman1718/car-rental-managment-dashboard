import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingLogo from "../../public/assets/home/Heading.png";
import { IoArrowBack, IoReorderTwoOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { PiDribbbleLogoLight } from "react-icons/pi";
import { VscTwitter } from "react-icons/vsc";
import { PiYoutubeLogoFill } from "react-icons/pi";

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
import CustomerImg from "../../public/assets/home/customer.png";

const Home = () => {
  return (
    <div className=" ">
      <div className=" h-[833px] max-sm:h-auto bg-[#0F0F0F] relative z-10 ">
        <MainContainer className="text-white py-[22px] ">
          <nav className="flex items-center justify-between ">
            <IoReorderTwoOutline className="w-5 h-5 " />
            <Image
              src={HeadingLogo}
              alt="Heading does not show "
              className=" max-sm:hidden "
            />
            <Link href={`/auth/signUp`}>
              <button className="border border-white rounded-[48px] px-5 py-2 font-semibold border-opacity-50 max-sm:text-[12px] ">
                Login/Register
              </button>
            </Link>
          </nav>
          <div className="flex flex-col w-full mt-[117px] max-sm:mt-[40px] mb-10 ">
            <h1 className="text-white text-[64px] leading-[120%] font-bold mb-10 md:w-[650px] max-md:text-[40px]  ">
              Discover the world on wheels with our car rental service
            </h1>
            <p className="text-[18px] text-white leading-[160%] font-normal mb-6 md:w-[650px] ">
              Choose from a wide range of cars that fit your style and budget.
              Experience the freedom of the open road with our reliable and{" "}
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
      <MainContainer className="relative top-[-70px] z-50 flex items-end gap-4 max-xl:max-w-[] rounded-[16px] px-6 py-[30px] bg-opacity-90 bg-white shadow-[0_8px_8px_-4px_#101828] max-xl:flex-col max-xl:items-start max-sm:hidden ">
        <div className=" flex items-center gap-x-4">
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
        </div>

        <div className="flex items-center gap-x-4">
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
        </div>
        <ArrowBtn
          className=" px-6 py-4 text-[16px] bg-[#242731] flex items-center gap-x-2 text-nowrap text-white rounded-[64px] "
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

      <div className=" bg-[#F5F5F5] py-[100px] max-md:py-[40px] ">
        <MainContainer className=" bg-[#F5F5F5] flex flex-col items-center">
          <div className=" text-center  ">
            <h1 className="text-[48px] leading-[130%] text-[#0F0F0F] font-bold tracking-[-2px] mb-6">
              Our Impressive Collection of Cars
            </h1>
            <p className=" text-[18px] text-[#0F0F0F] leading-[160%] tracking-[-1px] text-center mb-12   ">
              Ranging from elegant sedans to powerful sports cars, all carefully
              selected to provide our <br /> customers with the ultimate driving
              experience.
            </p>
            <div className=" flex items-center justify-center gap-x-4 max-md:hidden ">
              <CatogoriesBtn btnTitle="Popular Car" />
              <CatogoriesBtn btnTitle="Luxury Car" />
              <CatogoriesBtn btnTitle="Vintage Car" />
              <CatogoriesBtn btnTitle="Family Car" />
              <CatogoriesBtn btnTitle="Off-Road Car" />
            </div>
          </div>
          <div className=" grid grid-cols-[repeat(auto-fit,minmax(186px,1fr))] gap-[32px] w-full my-[64px] ">
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
          <ArrowBtn
            className=" bg-[#242731] text-white py-4 px-10 rounded-[64px] flex items-center justify-center gap-x-2  "
            btnTitle="See all Cars"
            icon={<IoArrowForward />}
          />
        </MainContainer>
      </div>
      <MainContainer className=" py-[120px] max-md:py-[40px] flex flex-col gap-y-[64px] ">
        <div className=" flex items-center justify-between  ">
          <h1 className="text-[40px] text-[#0F0F0F] max-xs:text-center tracking-[-2px] leading-[130%] font-bold   ">
            What Our Customers Say
          </h1>
          <div className=" flex items-center gap-x-4 max-xs:hidden  ">
            <span className=" group border-2 border-[#C0C0C0] p-5 rounded-full hover:bg-[#242731]  ">
              <IoArrowBack className=" w-6 h-6  text-[#C0C0C0] group-hover:text-white " />
            </span>
            <span className=" group border-2 border-[#C0C0C0] p-5 rounded-full  hover:bg-[#242731] hover:text-white ">
              <IoArrowForward className=" w-6 h-6  text-[#C0C0C0] group-hover:text-white  " />
            </span>
          </div>
        </div>
        <p className="text-[32px] text-[#0F0F0F] leading-[150%] tracking-[-2px] font-semibold opacity-80 max-xs:text-center ">
          &quot;I was really impressed with the level of service I received from
          this car rental company. The process was smooth and easy, and the car
          I rented was in excellent condition. The staff was friendly and
          helpful, and I felt well taken care of throughout my rental period. I
          would definitely recommend this company to anyone looking for a
          premium car rental experience.&quot;
        </p>
        <div className=" flex items-center gap-x-6 ">
          <Image src={CustomerImg} alt="customer img does not show" />
          <div>
            <h3 className="text-[24px] text-[#0F0F0F] leading-[150%] tracking-[-2px] font-bold  ">
              Lokman Hossain
            </h3>
            <h5 className="text-[20px] leading-[150%] text-[#737373] tracking-[-2px]  ">
              From <span className="font-semibold ">Texas</span>
            </h5>
          </div>
        </div>
      </MainContainer>

      <footer className=" bg-[#242731]  ">
        <MainContainer className=" py-[85px] max-md:py-[40px] text-white flex items-center justify-around gap-x-[20px] max-md:gap-y-[20px] max-md:flex-col max-md:items-center  ">
          <div className=" max-w-[488px] text-center ">
            <h1 className=" text-[36px] leading-[46px] font-bold mb-[20px] ">
              Download our mobile app
            </h1>
            <p className="leading-[26px] text-white opacity-80  ">
              Get exclusive access to car rentals with our mobile app. Download
              now and experience convenience on the go.
            </p>
          </div>

          <div className=" flex items-center gap-x-5 max-sm:flex-col max-md:gap-y-[20px] ">
            <button className="py-3 px-5 flex gap-x-3 items-center rounded-[73px] bg-white  ">
              <BiLogoApple className="text-[#242731] w-10 h-10 " />
              <div className="flex flex-col items-start ">
                <h6 className="text-[#242731] opacity-60 text-[12px] font-semibold mb-[-6px] text-nowrap ">
                  DOWNLOAD ON THE
                </h6>
                <h3 className="text-[#242731] text-[24px] font-medium text-nowrap ">
                  App Store
                </h3>
              </div>
            </button>
            <button className="py-3 px-5 flex gap-x-3 items-center rounded-[73px] bg-white  ">
              <BiLogoPlayStore className="text-[#242731] w-10 h-10 " />
              <div className="flex flex-col items-start ">
                <h6 className="text-[#242731] opacity-60 text-[12px] font-semibold mb-[-6px] text-nowrap  ">
                  GET IT ON
                </h6>
                <h3 className="text-[#242731] text-[24px] font-medium text-nowrap ">
                  Google Play
                </h3>
              </div>
            </button>
          </div>
        </MainContainer>

        <hr className="opacity-50  text-white  " />
        <MainContainer className=" flex items-center justify-between h-[115px] max-md:flex-col max-md:h-auto max-md:gap-y-[20px] max-md:py-[20px] ">
          <Image src={HeadingLogo} alt="logo does not show" />
          <div className="flex items-center  gap-x-10 ">
            <h4 className="text-[#D9DBE1] text-[14px] leading-[24px]  ">
              Rent
            </h4>
            <h4 className="text-[#D9DBE1] text-[14px] leading-[24px]  ">
              Share
            </h4>
            <h4 className="text-[#D9DBE1] text-[14px] leading-[24px] text-nowrap ">
              About us
            </h4>
            <h4 className="text-[#D9DBE1] text-[14px] leading-[24px]  ">
              Contact
            </h4>
          </div>
          <div className="flex items-center gap-x-4 ">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-10  ">
              <IoLogoInstagram className="text-white  " />
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-10  ">
              <PiDribbbleLogoLight className="text-white  " />
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-10  ">
              <VscTwitter className="text-white  " />
            </span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white bg-opacity-10  ">
              <PiYoutubeLogoFill className="text-white  " />
            </span>
          </div>
        </MainContainer>
      </footer>
    </div>
  );
};

export default Home;
