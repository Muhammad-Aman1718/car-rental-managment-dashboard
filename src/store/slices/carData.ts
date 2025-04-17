import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { carDataTypes } from "@/types/types";

export const getAllCarsData = createAsyncThunk("allCarsData/get", async () => {
  try {
    const response = await axiosInstance.get("carData");
    console.log("this is get all cars get slice =====> ", response.data);
    return response.data.data;
  } catch (error) {
    const errorAxios = error as AxiosError;
    const errorMessage =
      (errorAxios.response?.data as { message?: string })?.message ||
      "Something went wrong!";
    throw new Error(errorMessage);
  }
});

export const carData = createAsyncThunk(
  "carData/post",
  async (carData: carDataTypes) => {
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
      })
      .addCase(getAllCarsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCarsData.fulfilled, (state, action) => {
        state.loading = false;
        state.carData = action.payload;
      })
      .addCase(getAllCarsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to get all cars data";
      });
  },
});

export default carDataSlice.reducer;
