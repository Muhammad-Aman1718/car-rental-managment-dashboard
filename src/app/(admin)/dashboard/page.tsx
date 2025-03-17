"use client";
// import React from "react";
// import PerformanceCard from "@/components/dashboard/PerformanceCard";
// import StatisticsCard from "@/components/dashboard/StatisticsCard";
// import RecommendCard from "@/components/dashboard/RecommendCard";
// import { IMAGES } from "@/constants/images";

// const Dashboard = () => {
//   return (
//     <div className=" p-[30px] ">
//       <div className="grid grid-cols-4 gap-x-[30px]   ">
//         <PerformanceCard
//           className1="bg-primary"
//           className2="text-white  "
//           heading="Energy"
//           src={IMAGES.PERFORMANCE_CARD_IMG_1}
//         />
//         <PerformanceCard
//           className1="bg-white "
//           className2="text-[#242731] "
//           heading="Range"
//           src={IMAGES.PERFORMANCE_CARD_IMG_2}
//         />
//         <PerformanceCard
//           className1="bg-white"
//           className2="text-[#242731]"
//           heading="Break fluid"
//           src={IMAGES.PERFORMANCE_CARD_IMG_3}
//         />
//         <PerformanceCard
//           className1="bg-white"
//           className2="text-[#242731]"
//           heading="Tire Wear"
//           src={IMAGES.PERFORMANCE_CARD_IMG_4}
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-x-[30px] ">
//         <StatisticsCard heading="Miles" para="256 Miles" />
//         <StatisticsCard
//           heading="Car"
//           para="20 February 2022"
//           className1="flex-row-reverse"
//           className2="bg-[#F5F4F6] rounded-[10px] "
//           className3=" focus:bg-[#FF764C] "
//         />
//       </div>
//       <div className="grid grid-cols-3 gap-x-[30px] ">
//         <RecommendCard className="bg-[#E1DFA4] " heading="Mini Cooper" />
//         <RecommendCard
//           className="bg-[#E3ECF1] "
//           heading="Porsche 911 Carrera"
//         />
//         <RecommendCard className="bg-[#F4E3E5]" heading="Mercidese" />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import RecommendCard from "@/components/dashboard/RecommendCard";
import { IMAGES } from "@/constants/images";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="">
      {/* Performance Cards */}

      {/* {session?.user?.role === "admin" ? "Admin" : "User"} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[30px]">
        <PerformanceCard
          className1="bg-primary"
          className2="text-white"
          heading="Energy"
          src={IMAGES.PERFORMANCE_CARD_IMG_1}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Range"
          src={IMAGES.PERFORMANCE_CARD_IMG_2}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Break fluid"
          src={IMAGES.PERFORMANCE_CARD_IMG_3}
        />
        <PerformanceCard
          className1="bg-white"
          className2="text-[#242731]"
          heading="Tire Wear"
          src={IMAGES.PERFORMANCE_CARD_IMG_4}
        />
      </div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[30px] mt-4">
        <StatisticsCard heading="Miles" para="256 Miles" />
        <StatisticsCard
          heading="Car"
          para="20 February 2022"
          className1="flex-row-reverse"
          className2="bg-[#F5F4F6] rounded-[10px]"
          className3="focus:bg-[#FF764C]"
        />
      </div>
      {/* Recommend Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[30px] mt-4">
        <RecommendCard className="bg-[#E1DFA4]" heading="Mini Cooper" />
        <RecommendCard className="bg-[#E3ECF1]" heading="Porsche 911 Carrera" />
        <RecommendCard className="bg-[#F4E3E5]" heading="Mercedes" />
      </div>
    </div>
  );
};

export default Dashboard;
