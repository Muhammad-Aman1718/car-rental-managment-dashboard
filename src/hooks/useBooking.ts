import { useEffect } from "react";
import { getAllCarsData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useBooking = () => {
  const dispatch = useAppDispatch();
  const carData = useAppSelector((state) => state.carDataReducer.carData);
  const loading = useAppSelector((state) => state.carDataReducer.loading);

  useEffect(() => {
    dispatch(getAllCarsData());
  }, []);
  return {
    carData,
    loading,
  };
};

export default useBooking;
