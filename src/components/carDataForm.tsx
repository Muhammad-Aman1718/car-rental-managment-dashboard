import React from "react";
import CarDataFormInput from "./inputs/CarDataFormInput";

interface CarDataFormPropsTypes {
  onClick?: () => void;
}

const CarDataForm: React.FC<CarDataFormPropsTypes> = ({ onClick }) => {
  return (
    <div className=" w-full dark:bg-[#242731] overflow-y-auto mx-auto p-6 bg-white shadow-xl rounded-xl ">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Add New Car</h2>
      <form>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5  ">
          <CarDataFormInput
            label="Car Name"
            type="text"
            name="name"
            placeholder="Enter your Car Name"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Fuel Type"
            type="text"
            name="fuelType"
            placeholder="Enter your Fuel Type"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Transmission"
            type="text"
            name="transmission"
            placeholder="Enter your Transmission"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Mileage (km/l)"
            type="number"
            name="mileage"
            placeholder="Enter your Mileage (km/l)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Top Speed (km/h)"
            type="number"
            name="topSpeed"
            placeholder="Enter your Top speed (km/h)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Price ($)"
            type="number"
            name="price"
            placeholder="Enter your price ($)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Color"
            type="text"
            name="color"
            placeholder="Enter your color"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Engine Capacity (cc)"
            type="number"
            name="engineCapacity"
            placeholder="Enter your Engine Capacity (cc)"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Seating Capacity"
            type="number"
            name="seatingCapacity"
            placeholder="Enter your Seating Capacity"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Registration Number"
            type="text"
            name="registrationNo"
            placeholder=" Enter your car registration number"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Car Type"
            type="text"
            name="carType"
            placeholder="Enter your Car Type"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Model Year"
            type="number"
            name="year"
            placeholder="Enter your Model Year"
            className="w-full border p-2 rounded"
            required
          />
          <CarDataFormInput
            label="Doors"
            type="number"
            name="doors"
            placeholder="Enter number of Doors"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-y-5 my-[20px] ">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="hasAC" />
            <label className="dark:text-white ">Has AC</label>
          </div>

          <select name="purpose" className="w-full border p-2 rounded">
            <option value="RENT">Rent</option>
            <option value="SELL">Sell</option>
          </select>
        </div>

        <div className="flex gap-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <button
            onClick={onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarDataForm;
