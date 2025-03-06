import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const users = createAsyncThunk(
  "users/addUser",
  async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signUp",
        userData
      );
      console.log("postApi Response:", response.data);
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

const auth = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    error: null as string | null,
  },
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
