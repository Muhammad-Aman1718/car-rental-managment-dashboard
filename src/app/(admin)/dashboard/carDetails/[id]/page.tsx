import React from "react";

const CarDetails = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-[#242731]">
      <h1 className="text-3xl font-bold text-[#A162F7] mb-6">fdsa</h1>

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
          {/* <p>
            <strong className="text-[#A162F7]">Fuel Type:</strong> fdsa{" "}
          </p>
          <p>
            <strong className="text-[#A162F7]">Transmission:</strong> fdsa{" "}
          </p>
          <p>
            <strong className="text-[#A162F7]">Mileage:</strong> fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Top Speed:</strong> fdsa
          </p> */}
          <p>
            <strong className="text-[#A162F7]">Engine Capacity:</strong> fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Seating Capacity:</strong> fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Doors:</strong>fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Color:</strong> fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Model Year:</strong> dsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Registration #:</strong> fsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Car Type:</strong>fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Purpose:</strong> fdsa
          </p>
          <p>
            <strong className="text-[#A162F7]">Price:</strong>fdsa
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
