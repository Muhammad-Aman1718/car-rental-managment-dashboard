import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";

export interface CarDataRequestBody {
  adminId: string;
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
  hasAC: boolean;
  imageUrl: string;
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
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: carDataState = {
  loading: false,
  error: null,
  success: false,
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
        state.success = false;
      })
      .addCase(carData.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(carData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to post car data";
      });
  },
});

export default carDataSlice.reducer;
