import { createSlice } from "@reduxjs/toolkit";

// Initial state as a separate constant (best practice)
const initialState = { value: 0 };

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
  },
});

// Exporting actions
export const { increment, decrement, reset } = counterSlice.actions;

// Exporting reducer
export default counterSlice.reducer;
