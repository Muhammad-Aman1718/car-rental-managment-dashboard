import { useState } from "react";

const useDasboard = () => {
  const [openForm, setOpenForm] = useState(false);
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

  return {
    openForm,
    setOpenForm,
  };
};

export default useDasboard;
