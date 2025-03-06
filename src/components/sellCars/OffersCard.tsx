// import React from "react";
// import Image from "next/image";
// import { FaArrowRightLong, FaCarRear } from "react-icons/fa6";
// import CircleChart from "../../../public/assets/sellCars/chart.png";
// import CircleChart2 from "../../../public/assets/sellCars/circle.png";
// import { IoArrowRedoOutline } from "react-icons/io5";
// import { BsCurrencyDollar } from "react-icons/bs";

// const OffersCard = () => {
//   return (
//     <div className="flex items-center justify-around gap-x-[66px] bg-white px-[29px] py-[23px] rounded-[10px] min-w-[350px]">
//       <div>
//         <h2 className="leading-[26.04px] text-[#242731] text-[20px] font-bold ">
//           Killan James
//         </h2>
//         <h3 className=" text-[#A4A5A6] mt-0.5 text-[12px] leading-[15.62px] font-medium ">
//           <span className="text-[#FF6464] text-[18px] leading-[23.44px] font-medium mr-[5px] ">
//             $16,605
//           </span>
//           average price
//         </h3>
//         <p className="text-[#72767C] mt-0.5 text-[12px] leading-[15.62px] font-medium  ">
//           market avarage is $16,224
//         </p>
//         <button className=" bg-[#FF6370] rounded-[10px] mt-2 ">
//           <FaArrowRightLong className="w-5 h-5 text-white mx-[14px] " />
//         </button>
//       </div>
//       <div className="flex flex-col items-center ">
//         <Image src={CircleChart} alt="Circle img does not show" />
//         <h5 className="text-[14px] text-[#72767C] leading-[18.23px] font-bold  ">
//           Impression Share
//         </h5>
//       </div>
//       <div>
//         <Image src={CircleChart2} alt="CircleChart2 does not show" />
//       </div>
//       <div className="flex flex-col items-start gap-y-[5px] ">
//         <span className=" bg-[#407EF91A]   ">
//           <FaCarRear className="text-[#407EF9] h-6 w-6 " />
//         </span>
//         <h2 className="text-[#407EF9] leading-[26.04px] font-bold text-[20px]">
//           $1,174
//         </h2>
//         <p className="text-[12px] text-[#808191] leading-[15.62px] font-medium">
//           Model Spend
//         </p>
//       </div>
//       <div className="flex flex-col items-start gap-y-[5px] ">
//         <span>
//           <IoArrowRedoOutline className="text-[#FF6370] h-6 w-6" />
//         </span>
//         <h2 className="text-[#FF6370] leading-[26.04px] font-bold text-[20px]">
//           $1,174
//         </h2>
//         <p className="text-[12px] text-[#808191] leading-[15.62px] font-medium">
//           Model Spend
//         </p>
//       </div>
//       <div className="flex flex-col items-start gap-y-[5px] ">
//         <span>
//           <BsCurrencyDollar className=" text-[#A162F7] h-6 w-6 " />
//         </span>
//         <h2 className="text-[#A162F7] leading-[26.04px] font-bold text-[20px]">
//           $1,174
//         </h2>
//         <p className="text-[12px] text-[#808191] leading-[15.62px] font-medium">
//           Model Spend
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OffersCard;

// Orignal code

import React from "react";
import Image from "next/image";
import { FaArrowRightLong, FaCarRear } from "react-icons/fa6";
import CircleChart from "../../../public/assets/sellCars/chart.png";
import CircleChart2 from "../../../public/assets/sellCars/circle.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";

const OffersCard = () => {
  return (
    <div className="flex items-center justify-around gap-x-[66px] dark:bg-[#242731] bg-white px-[29px] py-[23px] rounded-[10px] ">
      <div>
        <h2 className="leading-[26.04px] dark:text-white text-[#242731] text-[20px] font-bold ">
          Killan James
        </h2>
        <h3 className=" text-[#A4A5A6] mt-0.5 text-[12px] leading-[15.62px] font-medium ">
          <span className="text-[#FF6464] text-[18px] leading-[23.44px] font-medium mr-[5px] ">
            $16,605
          </span>
          average price
        </h3>
        <p className="text-[#72767C] mt-0.5 text-[12px] leading-[15.62px] font-medium  ">
          market avarage is $16,224
        </p>
        <button className=" bg-[#FF6370] rounded-[10px] mt-2 ">
          <FaArrowRightLong className="w-5 h-5 text-white mx-[14px] " />
        </button>
      </div>
      <div className="flex flex-col items-center ">
        <Image src={CircleChart} alt="Circle img does not show" />
        <h5 className="text-[14px] dark:text-white text-[#72767C] leading-[18.23px] font-bold  ">
          Impression Share
        </h5>
      </div>
      <div>
        <Image src={CircleChart2} alt="CircleChart2 does not show" />
      </div>
      <div className="flex flex-col items-start gap-y-[5px] ">
        <span className=" bg-[#407EF91A]   ">
          <FaCarRear className="text-[#407EF9] h-6 w-6 " />
        </span>
        <h2 className="text-[#407EF9] leading-[26.04px] font-bold text-[20px]">
          $1,174
        </h2>
        <p className="text-[12px] dark:text-[#E0E4E7] text-[#808191] leading-[15.62px] font-medium">
          Model Spend
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-[5px] ">
        <span>
          <IoArrowRedoOutline className="text-[#FF6370] h-6 w-6" />
        </span>
        <h2 className="text-[#FF6370] leading-[26.04px] font-bold text-[20px]">
          $1,174
        </h2>
        <p className="text-[12px] dark:text-[#E0E4E7] text-[#808191] leading-[15.62px] font-medium">
          Model Spend
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-[5px] ">
        <span>
          <BsCurrencyDollar className=" text-[#A162F7] h-6 w-6 " />
        </span>
        <h2 className="text-[#A162F7] leading-[26.04px] font-bold text-[20px]">
          $1,174
        </h2>
        <p className="text-[12px] dark:text-[#E0E4E7] text-[#808191] leading-[15.62px] font-medium">
          Model Spend
        </p>
      </div>
    </div>
  );
};

export default OffersCard;
