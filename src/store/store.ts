import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import counterSlice from "@/store/slices/counterSlice";
// import studentSlice from "@/store/slices/studentSlice";
import auth from "@/store/slices/auth";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authReducer: auth,
      countReducer: counterSlice,
      // studentReducer: studentSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
