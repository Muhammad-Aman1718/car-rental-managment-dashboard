import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import auth from "@/store/slices/auth";
import userDataSlice from "@/store/slices/userData";
import carData from "./slices/carData";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authReducer: auth,
      userDataReducer: userDataSlice,
      carDataReducer: carData,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
