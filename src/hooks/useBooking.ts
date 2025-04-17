import { useEffect } from "react";
import { getAllCarsData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useBooking = () => {
  const dispatch = useAppDispatch();

  const { carData, loading } = useAppSelector((state) => state.carDataReducer);

  useEffect(() => {
    // Sirf tabhi fetch karo jab carData empty ho
    if (carData.length === 0 && !loading) {
      dispatch(getAllCarsData());
    }
  }, [dispatch, carData.length, loading]);

  return {
    carData,
    loading,
  };
};

export default useBooking;
