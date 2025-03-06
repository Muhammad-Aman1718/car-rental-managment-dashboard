import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counter {
  value: number;
}

const initialState: counter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmmount } =
  counterSlice.actions;

export default counterSlice.reducer;
