import { carData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { carDataTypes } from "@/types/types";
import { showToast } from "@/utils/showToast";
import { useState } from "react";

const useAddCar = () => {
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
  const [image, setImage] = useState<File | null>(null);

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.carDataReducer.loading);

  const handleOpen = () => {
    setOpenForm(!openForm);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
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

    if (!image) {
      showToast("error", "Please upload an image");
    }

    const buildFormData = () => {
      console.log("build form is run ======> ");

      const formData = new FormData();

      // Append text fields
      formData.append("carName", carName);
      formData.append("fuelType", fuelType);
      formData.append("transmission", transmission);
      formData.append("mileage", mileage);
      formData.append("topSpeed", topSpeed);
      formData.append("price", price);
      formData.append("color", color);
      formData.append("engineCapacity", engineCapacity);
      formData.append("seatingCapacity", seatingCapacity);
      formData.append("registrationNumber", registrationNumber);
      formData.append("carType", carType);
      formData.append("modelYear", modelYear);
      formData.append("doors", doors);
      formData.append("purpose", purpose);

      // Append files
      if (image) formData.append("image", image);

      console.log("build form is run ======> ", formData);
      return formData;
    };

    const formData = buildFormData();

    try {
      await dispatch(carData(formData)).unwrap();
      console.log("Car data submitted successfully");

      showToast("success", "Car data submitted successfully");

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
      setImage(null);
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
    handleImageChange,
    image,
  };
};

export default useAddCar;
