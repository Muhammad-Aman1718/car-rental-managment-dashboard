import { carData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { carDataTypes } from "@/types/types";
import { showToast } from "@/utils/showToast";
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
  const [purpose, setPurpose] = useState("");

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.carDataReducer.loading);

  const handleOpen = () => {
    setOpenForm(!openForm);
  };

  const handleCarData = async () => {
    if (
      !carName ||
      !fuelType ||
      !transmission ||
      !mileage ||
      !topSpeed ||
      !price ||
      !color ||
      !engineCapacity ||
      !seatingCapacity ||
      !registrationNumber ||
      !carType ||
      !modelYear ||
      !doors ||
      !purpose
    ) {
      showToast("error", "All fields are requried!");
      return;
    }
    const payload: carDataTypes = {
      carName,
      fuelType,
      transmission,
      mileage,
      topSpeed,
      price,
      color,
      engineCapacity,
      seatingCapacity,
      registrationNumber,
      carType,
      modelYear,
      doors,
      purpose,
    };

    try {
      await dispatch(carData(payload)).unwrap();
      console.log("Car data submitted successfully");
      setCarName("");
      setFuelType("");
      setTransmission("");
      setMileage("");
      setTopSpeed("");
      setPrice("");
      setColor("");
      setEngineCapacity("");
      setSeatingCapacity("");
      setRegistrationNumber("");
      setCarType("");
      setModelYear("");
      setDoors("");
      setPurpose("");
    } catch (error) {
      console.error("Error submitting car data:", error);
    }
  };

  return {
    openForm,
    handleOpen,
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
  };
};

export default useDasboard;
