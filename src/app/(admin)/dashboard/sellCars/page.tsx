// import React from "react";
// import Image from "next/image";
// import SellCarsImg from "../../../../../public/assets/sellCars/sellCars.png";
// import SellCarsChartImg from "../../../../../public/assets/sellCars/sellCarsChart.png";
// import FilterBtn from "@/components/booking/FilterBtn";
// import OffersCard from "@/components/sellCars/OffersCard";

// const SellCars = () => {
//   return (
//     <div className="flex flex-col gap-y-[30px] ">
//       <h1 className="font-bold text-[30px] text-[#242731] leading-[39.06px] ">
//         Sell Cars
//       </h1>
//       <div className=" grid grid-cols-3 gap-x-[30px] ">
//         <div className="col-span-2 flex flex-col bg-white px-[43px] py-[27px] rounded-[14px] ">
//           <h3 className="font-bold text-[30px] text-[#242731] leading-[39.06px]">
//             2022 Mercedes Benz
//           </h3>
//           <div className="flex items-center justify-center ">
//             <Image src={SellCarsImg} alt="sell car does not show" />
//           </div>
//         </div>
//         <div className="col-span-1 bg-white px-[24px] py-[28px] rounded-[14px]  ">
//           <h1 className="mb-[25px] font-bold text-[24px] text-[#242731] leading-[31.25px]">
//             Tracking History
//           </h1>
//           <div className="flex items-center justify-center">
//             <Image src={SellCarsChartImg} alt="sell car does not show" />
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between ">
//         <h2 className="font-bold text-[30px] text-[#242731] leading-[39.06px]">
//           Offers
//         </h2>
//         <div className="flex items-center gap-x-4 ">
//           <FilterBtn className="text-[#A162F7] " heading="New" />
//           <FilterBtn className="text-[#A162F7] " heading="Toyota" />
//         </div>
//       </div>

//       <div>
//         <OffersCard />
//         <OffersCard />
//       </div>
//     </div>
//   );
// };

// export default SellCars;

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
