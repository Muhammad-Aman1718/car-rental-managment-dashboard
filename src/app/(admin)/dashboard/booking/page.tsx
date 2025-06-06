"use client";
// /dashoard

import React from "react";
import FilterBtn from "@/components/booking/FilterBtn";
import { RxDashboard } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc";
import BookingCarCard from "@/components/booking/BookingCarCard";
import useBooking from "@/hooks/useBooking";
import Loader from "@/components/Loader";

const Booking = () => {
  const { carData, loading } = useBooking();

  return (
    <div className="px-4 max-sm:px-2 lg:px-8">
      <h1 className="mt-5 dark:text-white text-[#242731] text-[30px] font-bold leading-[39.06px]">
        Booking
      </h1>

      {/* Filter & Icons */}
      <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <FilterBtn heading="New" />
          <FilterBtn heading="Toyota" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <span className="dark:bg-[#242731]  bg-white h-11 w-11 grid place-items-center rounded-full shadow-md">
            <RxDashboard className="w-6 h-6 dark:text-[#E0E4E7] text-[#777E90]" />
          </span>
          <span className="bg-[#A162F7] h-11 w-11 grid place-items-center rounded-full shadow-md">
            <VscSettings className="w-6 h-6 text-white" />
          </span>
        </div>
      </div>

      {/* Booking Cards - Responsive Grid */}

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {carData.map((data, index) => (
            <BookingCarCard key={index} car={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
