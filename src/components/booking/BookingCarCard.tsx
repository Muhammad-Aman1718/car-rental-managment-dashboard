

// import Image from "next/image";
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

// components/CarCard.tsx
import React from "react";
import Image from "next/image";

interface CarCardProps {
  name: string;
  brand: string;
  model: string;
  year: number;
  fuelType: string;
  mileage: number;
  price: number;
  imageUrl: string;
}

const BookingCarCard: React.FC<CarCardProps> = ({
  // name,
  // brand,
  // model,
  // year,
  // fuelType,
  // mileage,
  // price,
  // imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-[#1E1E2F] shadow-md rounded-2xl overflow-hidden max-w-sm w-full">
      <Image
        src={BookingCar}
        alt={`this is not show `}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#242731] dark:text-white">
          fdsafdsadsa   dfsafdsa
        </h2>
        <p className="text-sm text-gray-600 dark:text-[#B0B3BF]">
          Model: vigo | Year:  2034
        </p>
        <p className="text-sm text-gray-600 dark:text-[#B0B3BF]">
          Fuel: 4 wheel | Mileage: 360 km
        </p>
        <p className="mt-2 text-lg font-semibold text-green-600 dark:text-green-400">
          {/* ${price.toLocaleString()} */} hfkjsal
        </p>
      </div>
    </div>
  );
};

export default BookingCarCard;
