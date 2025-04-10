import Image from "next/image";
// import React from "react";
// import { SlHeart } from "react-icons/sl";
// import { LuUserRound } from "react-icons/lu";
import BookingCar from "../../../public/assets/bookingImgs/bookingCar.png";
// import SquareArrow from "../../../public/assets/bookingImgs/icon.png";

// const BookingCarCard = () => {
//   return (
//     <div className="dark:bg-[#242731] bg-white rounded-2xl shadow-md p-6 max-sm:p-4 ">
//       {/* Car Title & Favorite Icon */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-[18px] font-bold dark:text-white text-[#242731]">
//           Porsche 718 Cayman S
//         </h2>
//         <SlHeart className="text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500 transition" />
//       </div>
//       <h3 className="mt-1 text-[16px] text-gray-500">Coupe</h3>

//       {/* Car Image */}
//       <div className="flex justify-center my-5">
//         <Image
//           src={BookingCar}
//           alt="Car Image"
//           className="w-full max-w-[180px] sm:max-w-[220px] object-contain"
//         />
//       </div>

//       {/* Car Details */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <span className="flex items-center gap-1">
//             <LuUserRound className="text-[#A162F7] w-5 h-5" />
//             <h4 className="text-[#72767C] dark:text-white">4</h4>
//           </span>
//           <span className="flex items-center gap-1">
//             <Image src={SquareArrow} alt="Transmission" className="w-5 h-5" />
//             <h4 className="text-[#72767C] dark:text-white ">Manual</h4>
//           </span>
//         </div>

//         {/* Price */}
//         <h3 className="text-[18px] font-medium leading-[23.44px] text-[#242731] dark:text-white ">
//           $400
//           <span className=" dark:text-white text-[#72767C] text-[14px]">
//             /d
//           </span>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default BookingCarCard;

export default function CarCard() {
  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">
        <Image
          src={BookingCar}
          alt="Car image"
          // className="w-full h-full object-cover"
        />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold">Toyota Corolla </h2>
        <p className="text-sm text-gray-600">Year: 2022</p>
        <p className="text-sm text-gray-600">Mileage: 18 km/l</p>
        <p className="text-sm text-gray-600">Top Speed: 180 km/h</p>
        <p className="text-sm text-gray-600">Price: $22,000</p>

        <div className="flex gap-4 pt-4">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
          <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
