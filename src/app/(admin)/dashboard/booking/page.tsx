// import React from "react";
// import FilterBtn from "@/components/booking/FilterBtn";
// import { RxDashboard } from "react-icons/rx";
// import { VscSettings } from "react-icons/vsc";
// import BookingCarCard from "@/components/booking/BookingCarCard";

// const Booking = () => {
//   return (
//     <div>
//       <h1 className=" mt-5 leading-[39.06px] text-[#242731] text-[30px] font-bold ">
//         Booking
//       </h1>
//       <div className="flex items-center justify-between mt-[30px] ">
//         <div className="flex items-center gap-x-4 ">
//           <FilterBtn heading="New" />
//           <FilterBtn heading="Toyota" />
//         </div>
//         <div className="flex items-center gap-x-4  ">
//           <span className="bg-white h-11 w-11 grid place-items-center rounded-[30px] ">
//             <RxDashboard className="w-6 h-6 text-[#777E90] " />
//           </span>
//           <span className="bg-[#A162F7] h-11 w-11 grid place-items-center rounded-[30px]   ">
//             <VscSettings className="w-6 h-6 text-white " />
//           </span>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-6 mt-[30px] ">
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//         <BookingCarCard />
//       </div>
//     </div>
//   );
// };

// export default Booking;

import React from "react";
import FilterBtn from "@/components/booking/FilterBtn";
import { RxDashboard } from "react-icons/rx";
import { VscSettings } from "react-icons/vsc";
import BookingCarCard from "@/components/booking/BookingCarCard";

const Booking = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Array.from({ length: 15 }, (_, index) => (
          <BookingCarCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
