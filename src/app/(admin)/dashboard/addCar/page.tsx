"use client";
import React from "react";
import CarDataFormInput from "@/components/inputs/CarDataFormInput";
import Loader from "@/components/Loader";
import useAddCar from "@/hooks/useAddCar";
import { BsUpload } from "react-icons/bs";

interface AddCarPropsTypes {
  onClick?: () => void;
}

const AddCar: React.FC<AddCarPropsTypes> = ({ onClick }) => {
  const {
    carName,
    setCarName,
    fuelType,
    setFuelType,
    transmission,
    setTransmission,
    mileage,
    setMileage,
    topSpeed,
    setTopSpeed,
    price,
    setPrice,
    color,
    setColor,
    engineCapacity,
    setEngineCapacity,
    seatingCapacity,
    setSeatingCapacity,
    registrationNumber,
    setRegistrationNumber,
    carType,
    setCarType,
    modelYear,
    setModelYear,
    doors,
    setDoors,
    purpose,
    setPurpose,
    handleCarData,
    loading,
    handleImageChange,
    image,
  } = useAddCar();
  return (
    <div className=" dark:bg-[#242731] overflow-y-auto mx-auto p-6 bg-white shadow-xl rounded-xl ">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Add New Car</h2>
      <div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5  ">
          <CarDataFormInput
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            label="Car Name"
            type="text"
            name="name"
            placeholder="Enter your Car Name"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            label="Fuel Type"
            type="text"
            name="fuelType"
            placeholder="Enter your Fuel Type"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            label="Transmission"
            type="text"
            name="transmission"
            placeholder="Enter your Transmission"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            label="Mileage (km/l)"
            type="text"
            name="mileage"
            placeholder="Enter your Mileage (km/l)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={topSpeed}
            onChange={(e) => setTopSpeed(e.target.value)}
            label="Top Speed (km/h)"
            type="text"
            name="topSpeed"
            placeholder="Enter your Top speed (km/h)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price ($)"
            type="text"
            name="price"
            placeholder="Enter your price ($)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={color}
            onChange={(e) => setColor(e.target.value)}
            label="Color"
            type="text"
            name="color"
            placeholder="Enter your color"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={engineCapacity}
            onChange={(e) => setEngineCapacity(e.target.value)}
            label="Engine Capacity (cc)"
            type="text"
            name="engineCapacity"
            placeholder="Enter your Engine Capacity (cc)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            label="Seating Capacity"
            type="text"
            name="seatingCapacity"
            placeholder="Enter your Seating Capacity"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            label="Registration Number"
            type="text"
            name="registrationNo"
            placeholder=" Enter your car registration number"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            label="Car Type"
            type="text"
            name="carType"
            placeholder="Enter your Car Type"
            className="w-full border p-2 rounded"
            required={true}
          />
          <CarDataFormInput
            value={modelYear}
            onChange={(e) => setModelYear(e.target.value)}
            label="Model Year"
            type="text"
            name="year"
            placeholder="Enter your Model Year"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            value={doors}
            onChange={(e) => setDoors(e.target.value)}
            label="Doors"
            type="text"
            name="doors"
            placeholder="Enter number of Doors"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-y-5 my-[20px] ">
          <select
            name="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full border p-2 rounded outline-none dark:bg-[#242731] dark:text-white "
          >
            <option value="" disabled hidden>
              Select your car purpose
            </option>
            <option value="RENT">Rent</option>
            <option value="SELL">Sell</option>
          </select>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Image
          </label>

          <div className="relative">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <label
              htmlFor="image"
              className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <BsUpload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-600">
                  {image ? image.name : "Click to upload"}
                </span>
              </div>
            </label>
          </div>
        </div>

        <div className="flex gap-x-4">
          <button
            onClick={handleCarData}
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? <Loader /> : `Submit`}
          </button>
          <button
            onClick={onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
