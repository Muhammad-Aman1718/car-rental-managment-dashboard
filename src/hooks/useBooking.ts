import { useEffect } from "react";
import { getAllCarsData } from "@/store/slices/carData";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useBooking = () => {
  const dispatch = useAppDispatch();

  const { carData, loading } = useAppSelector((state) => state.carDataReducer);

  useEffect(() => {
    if (carData.length === 0 && !loading) {
      dispatch(getAllCarsData());
    }
  }, [carData.length, dispatch, loading]);

  return {
    carData,
    loading,
  };
};

export default useBooking;
