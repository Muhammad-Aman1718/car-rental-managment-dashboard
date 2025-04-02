import axiosInstance from "@/lib/axiosInstance";
import { UserData } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const users = createAsyncThunk(
  "users/addUser",
  async (userData: UserData) => {
    try {
      const response = await axiosInstance.post("/signUp", userData);
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
  user: null,
  loading: false,
  error: null as string | null,
};

const auth = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(users.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(users.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(users.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add user!";
      });
  },
});

export default auth.reducer;
