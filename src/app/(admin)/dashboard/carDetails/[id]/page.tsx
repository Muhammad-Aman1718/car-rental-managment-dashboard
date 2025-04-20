"use client";
// app/(admin)/dashboard/carDetails/[id]/[page.tsx]
import React from "react";
import { useParams } from "next/navigation";
import useBooking from "@/hooks/useBooking";

const CarDetails = () => {
  const { id } = useParams();
  const { carData } = useBooking();

  const car = carData.find((c) => c.id === id);

  if (!car) {
    return <div className="text-center py-10">Car not found</div>;
  }

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-[#242731]">
      <h1 className="text-3xl font-bold text-[#A162F7] mb-6">{car?.carName}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6">
        {/* Image */}
        {/* <div className="w-full">
          <Image
            src={carImage}
            alt={car.carName}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div> */}

        {/* Car Details */}
        <div className="space-y-4 text-base">
          <p>
            <strong className="text-[#A162F7]">Fuel Type:</strong>{" "}
            {car?.fuelType}
          </p>
          <p>
            <strong className="text-[#A162F7]">Transmission:</strong>{" "}
            {car?.transmission}
          </p>
          <p>
            <strong className="text-[#A162F7]">Mileage:</strong>
            {car?.mileage}
          </p>
          <p>
            <strong className="text-[#A162F7]">Top Speed:</strong>{" "}
            {car?.topSpeed}
          </p>
          <p>
            <strong className="text-[#A162F7]">Engine Capacity:</strong>{" "}
            {car?.engineCapacity}
          </p>
          <p>
            <strong className="text-[#A162F7]">Seating Capacity:</strong>{" "}
            {car?.seatingCapacity}
          </p>
          <p>
            <strong className="text-[#A162F7]">Doors:</strong>
            {car?.doors}
          </p>
          <p>
            <strong className="text-[#A162F7]">Color:</strong> {car?.color}
          </p>
          <p>
            <strong className="text-[#A162F7]">Model Year:</strong>{" "}
            {car?.modelYear}
          </p>
          <p>
            <strong className="text-[#A162F7]">Registration #:</strong>{" "}
            {car?.registrationNumber}
          </p>
          <p>
            <strong className="text-[#A162F7]">Car Type:</strong>
            {car?.carType}
          </p>
          <p>
            <strong className="text-[#A162F7]">Purpose:</strong> {car?.purpose}
          </p>
          <p>
            <strong className="text-[#A162F7]">Price:</strong>
            {car?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
