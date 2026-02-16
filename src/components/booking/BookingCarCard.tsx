"use client";
import Image from "next/image";
import BookingCar from "../../../public/assets/bookingImgs/bookingCar.png";
import { carDataTypes } from "@/types/types";
import Link from "next/link";

interface BookingCarCardPropsTypes {
  car?: carDataTypes;
}


const BookingCarCard: React.FC<BookingCarCardPropsTypes> = ({ car }) => {
  return (
    <div className="w-full max-w-md dark:bg-[#242731] bg-white shadow-xl rounded-2xl overflow-hidden">
      <Image
        src={BookingCar}
        alt="Car image"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold dark:text-white ">{car?.carName}</h2>
        <p className="text-sm text-gray-600 dark:text-white  ">
          Year: <span className="dark:text-gray-300 ">{car?.modelYear}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-white ">
          Mileage:
          <span className="dark:text-gray-300">{car?.mileage} km/l</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-white ">
          Top Speed:
          <span className="dark:text-gray-300">{car?.topSpeed} km/h</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-white ">
          Price: <span className="dark:text-gray-300">${car?.price}</span>
        </p>

        <div className="flex gap-4 pt-4">
          <Link href={`carDetails/${car?.id}`}>
            <button className="w-full bg-[#A162F7]  text-white py-2 px-4 rounded-lg hover:bg-[#8247d5] transition">
              View Details
            </button>
          </Link>
          <button className="w-full border border-[#A162F7] text-[#A162F7] py-2 px-4 rounded-lg ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCarCard;
