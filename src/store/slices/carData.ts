import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { carDataTypes } from "@/types/types";

export interface CarDataRequestBody {
  carName: string;
  fuelType: string;
  transmission: string;
  mileage: string;
  topSpeed: string;
  price: string;
  color: string;
  engineCapacity: string;
  seatingCapacity: string;
  registrationNumber: string;
  carType: string;
  modelYear: string;
  doors: string;
  //   imageUrl: string;
  purpose: string;
}

export const carData = createAsyncThunk(
  "carData/post",
  async (carData: CarDataRequestBody) => {
    try {
      const response = await axiosInstance.post("carData", carData);
      console.log("this is response on slice =========> ", response.data);

      return response.data;
    } catch (error) {
      const errorAxios = error as AxiosError;
      const errorMessage =
        (errorAxios.response?.data as { message?: string })?.message ||
        "Something went wrong!";
      throw new Error(errorMessage);
    }
  }
);

interface carDataState {
  carData: carDataTypes[];
  loading: boolean;
  error: string | null;
}

const initialState: carDataState = {
  carData: [],
  loading: false,
  error: null,
};

const carDataSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(carData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(carData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(carData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to post car data";
      });
  },
});

export default carDataSlice.reducer;
