"use client";
import ActivityCard from "@/components/assets/ActivityCard";
import AvailableSensors from "@/components/assets/AvailableSensors";
import BlueCard from "@/components/assets/BlueCard";
import Noties from "@/components/assets/Noties";
import Reminder from "@/components/assets/Reminder";
import CarDataForm from "@/components/carDataForm";
import { IMAGES } from "@/constants/images";
import useAssets from "@/hooks/setting/useAssets";
import Image from "next/image";

const Assets = () => {
  const { openForm, handleOpenForm } = useAssets();

  return (
    <div className=" ">
      <h1 className="dark:text-white text-[#242731] leading-[39.06px] text-[24px] sm:text-[28px] md:text-[30px] font-bold">
        Assets
      </h1>

      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 mt-4">
        <div className="flex flex-col dark:bg-[#242731] bg-[#438FFE] rounded-[14px] w-full xl:w-[361px] p-5">
          <div className="flex flex-col gap-5">
            <BlueCard
              title1="Fuel Usage"
              amount1="2903.89 Ltr"
              title2="KM Driven"
              amount2="2903.89 Ltr"
            />
            <BlueCard
              title1="Total Cost"
              amount1="$3,00,290.00"
              title2="Top Speed"
              amount2="$5.2K"
            />
          </div>
          <div className=" w-full flex justify-center mt-4">
            <Image
              src={IMAGES.CAR}
              alt="car img does not show"
              width={30}
              height={30}
              className="object-cover w-full max-w-[300px] xl:max-w-[350px]"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <ActivityCard />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Noties />
            <AvailableSensors />
          </div>
          <Reminder onClick={handleOpenForm} />
        </div>
        {openForm && <CarDataForm />}
      </div>
    </div>
  );
};

export default Assets;
