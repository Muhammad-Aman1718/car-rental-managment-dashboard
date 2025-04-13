import { useState } from "react";

const useDasboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const [carName, setCarName] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState("");
  const [topSpeed, setTopSpeed] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [carType, setCarType] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [doors, setDoors] = useState("");
  const [hasAC, setHasAC] = useState("");

  return {
    openForm,
    setOpenForm,
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
    hasAC,
    setHasAC,
  };
};

export default useDasboard;
