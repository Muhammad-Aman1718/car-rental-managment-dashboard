import { useEffect } from "react";
import { getAllCarsData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useBooking = () => {
  const dispatch = useAppDispatch();
  const carData = useAppSelector((state) => state.carDataReducer.carData);

  useEffect(() => {
    dispatch(getAllCarsData());
  }, []);
  console.log("this is hook carData", carData);

  return {
    carData,
  };
};

export default useBooking;
