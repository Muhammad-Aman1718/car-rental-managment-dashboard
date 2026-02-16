import React from "react";
import Image from "next/image";
import SellCarsImg from "../../../../../public/assets/sellCars/sellCars.png";
import SellCarsChartImg from "../../../../../public/assets/sellCars/sellCarsChart.png";
import FilterBtn from "@/components/booking/FilterBtn";
import OffersCard from "@/components/sellCars/OffersCard";

const SellCars = () => {
  return (
    <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="dark:text-white font-bold text-2xl sm:text-3xl text-[#242731]">
        Sell Cars
      </h1>

      {/* Car & Tracking History Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Car Info */}
        <div className="md:col-span-2 flex flex-col dark:bg-[#242731] bg-white p-6 rounded-lg">
          <h3 className="font-bold text-xl sm:text-2xl dark:text-white text-[#242731]">
            2022 Mercedes Benz
          </h3>
          <div className="flex items-center justify-center mt-4">
            <Image
              src={SellCarsImg}
              alt="Sell car does not show"
              className="w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>

        {/* Tracking History */}
        <div className="dark:bg-[#242731] bg-white p-6 rounded-lg">
          <h1 className="mb-4 font-bold text-lg sm:text-xl dark:text-white text-[#242731]">
            Tracking History
          </h1>
          <div className="flex items-center justify-center">
            <Image
              src={SellCarsChartImg}
              alt="Tracking chart does not show"
              className="w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-lg:hidden ">
        <h2 className="font-bold text-2xl sm:text-3xl text-[#242731] dark:text-white ">
          Offers
        </h2>
        <div className="flex gap-3 mt-3 sm:mt-0">
          <FilterBtn className="text-[#A162F7]" heading="New" />
          <FilterBtn className="text-[#A162F7]" heading="Toyota" />
        </div>
      </div>

      {/* Offers Cards */}

      <div className=" max-lg:hidden ">
        <OffersCard />
        <OffersCard />
      </div>

      {/* <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex gap-x-4 w-max">
          <OffersCard />
        </div>
        <div className="flex gap-x-4 w-max">
          <OffersCard />
        </div>
        <div className="flex gap-x-4 w-max">
          <OffersCard />
        </div>
      </div> */}
    </div>
  );
};

export default SellCars;
