import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("profiles/fetch", async () => {
  const response = await axios.get("http://localhost:3000/api/profiles");
  const result = await response.data;
  console.log("result ===========>", result);
  return result.data;
});

// export const addStudent = createAsyncThunk(
//   "students/add",
//   async (studentData: {
//     cnic: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     address: string;
//   }) => {
//     const response = await axios.post(
//       "http://localhost:3000/api/students",
//       studentData
//     );
//     console.log("postApi ===========>", response);
//     return response.data.data;
//   }
// );

interface Student {
  id: string;
  cnic: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

interface StudentsState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        // console.log("actions is load in students", action.payload);
        state.students = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    // .addCase(addStudent.fulfilled, (state: any, action) => {
    //   state.students.push(action.payload);
    // });
  },
});

export default studentSlice.reducer;
