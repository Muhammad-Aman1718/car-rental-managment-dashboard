// import Image from "next/image";
// import React from "react";
// import { SlHeart } from "react-icons/sl";
// import { LuUserRound } from "react-icons/lu";
// import BookingCar from "../../../public/assets/bookingImgs/bookingCar.png";
// import SquareArrow from "../../../public/assets/bookingImgs/icon.png";

// const BookingCarCard = () => {
//   return (
//     <div className=" bg-white rounded-[16px]   p-6  ">
//       <div className="flex items-center justify-between ">
//         <h2 className="leading-[23.44px] text-[18px] font-bold ">
//           Porshe 718 Cayman S
//         </h2>
//         <SlHeart className="text-[#A4A5A6] w-6 h-6 " />
//       </div>
//       <h2 className=" mt-1 leading-[20.83px] text-[#72767C] text-[16px] ">
//         Coupe
//       </h2>
//       <div className="flex items-center justify-center my-[21px] ">
//         <Image src={BookingCar} alt="Bokoking car img does not show" />
//       </div>
//       <div className="flex items-center justify-between ">
//         <div className=" flex items-center gap-x-[18px] ">
//           <span className="flex items-center gap-x-1 ">
//             <LuUserRound className="text-[#A162F7] w-5 h-5  " />
//             <h4 className="text-[#72767C] leading-[20.83px] ">4</h4>
//           </span>
//           <span className="flex items-center gap-x-[5px]">
//             <Image src={SquareArrow} alt="Square arrrow does not show" />
//             <h4 className="text-[#72767C] leading-[20.83px] ">Manual</h4>
//           </span>
//         </div>
//         <h3>
//           $400<span className="text-[#72767C] leading-[20.83px] ">/d</span>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default BookingCarCard;

import Image from "next/image";
import React from "react";
import { SlHeart } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";
import BookingCar from "../../../public/assets/bookingImgs/bookingCar.png";
import SquareArrow from "../../../public/assets/bookingImgs/icon.png";

const BookingCarCard = () => {
  return (
    <div className="dark:bg-[#242731] bg-white rounded-2xl shadow-md p-6 max-sm:p-4 ">
      {/* Car Title & Favorite Icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-bold dark:text-white text-[#242731]">
          Porsche 718 Cayman S
        </h2>
        <SlHeart className="text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500 transition" />
      </div>
      <h3 className="mt-1 text-[16px] text-gray-500">Coupe</h3>

      {/* Car Image */}
      <div className="flex justify-center my-5">
        <Image
          src={BookingCar}
          alt="Car Image"
          className="w-full max-w-[180px] sm:max-w-[220px] object-contain"
        />
      </div>

      {/* Car Details */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <LuUserRound className="text-[#A162F7] w-5 h-5" />
            <h4 className="text-[#72767C] dark:text-white">4</h4>
          </span>
          <span className="flex items-center gap-1">
            <Image src={SquareArrow} alt="Transmission" className="w-5 h-5" />
            <h4 className="text-[#72767C] dark:text-white ">Manual</h4>
          </span>
        </div>

        {/* Price */}
        <h3 className="text-[18px] font-medium leading-[23.44px] text-[#242731] dark:text-white ">
          $400
          <span className=" dark:text-white text-[#72767C] text-[14px]">
            /d
          </span>
        </h3>
      </div>
    </div>
  );
};

export default BookingCarCard;
