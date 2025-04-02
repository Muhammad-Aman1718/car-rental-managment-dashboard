import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { UserData } from "@/types/types";
import { AxiosError } from "axios";

export const getUsersData = createAsyncThunk("userData/get", async () => {
  try {
    const response = await axiosInstance.get("/userData");
    return response.data.user;
  } catch (error) {
    const errorAxios = error as AxiosError;
    const errorMessage =
      (errorAxios.response?.data as { message?: string })?.message ||
      "Something went wrong!";
    throw new Error(errorMessage);
  }
});

export const updateUsersData = createAsyncThunk(
  "userData/update",
  async (userData: UserData) => {
    try {
      const response = await axiosInstance.put("/userData", userData);
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
  userData: null as UserData | null,
  loading: false,
  error: null as string | null,
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch all user data!";
      })
      .addCase(updateUsersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUsersData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add user!";
      });
  },
});

export default userData.reducer;
