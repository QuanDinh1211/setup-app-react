import { createSlice } from "@reduxjs/toolkit";

import { getData } from "../thunkActions/homeThunkAction";

const initialState = {
  count: 0,
  name: "John",
};

const homeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getData.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getData.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.items = action.payload;
    //   })
    //   .addCase(getData.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export const { increment, decrement, setName } = homeSlice.actions;

export default homeSlice;
