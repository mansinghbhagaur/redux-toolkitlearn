import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const dataSlice = createSlice({
  name: "data",
  //   type: "data",
  initialState: { items: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "Success";
      state.items = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
