import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { UserData } from "@/types/types";
import { AxiosError } from "axios";

export const usersData = createAsyncThunk(
  "userData/update",
  async (userData: UserData) => {
    try {
      const response = await axiosInstance.put("/userData", userData);
      console.log("putApi Response:", response.data);
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
const initialState = {
  userData: null,
  loading: false,
  error: null as string | null,
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(usersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(usersData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(usersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add user!";
      });
  },
});

export default userData.reducer;
