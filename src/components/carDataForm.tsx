import React from "react";

const CarDataForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="fuelType"
          placeholder="Fuel Type"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="mileage"
          placeholder="Mileage (km/l)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="topSpeed"
          placeholder="Top Speed (km/h)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="engineCapacity"
          placeholder="Engine Capacity (cc)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="seatingCapacity"
          placeholder="Seating Capacity"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="registrationNo"
          placeholder="Registration Number"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="carType"
          placeholder="Car Type"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Model Year"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="doors"
          placeholder="Doors"
          className="w-full border p-2 rounded"
          required
        />

        <div className="flex items-center gap-2">
          <input type="checkbox" name="hasAC" />
          <label>Has AC</label>
        </div>

        <select name="purpose" className="w-full border p-2 rounded">
          <option value="RENT">Rent</option>
          <option value="SELL">Sell</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarDataForm;
