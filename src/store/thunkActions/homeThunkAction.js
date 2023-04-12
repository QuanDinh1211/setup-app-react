import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("home/getData", async () => {
  const response = { data: [] };
  return response.data;
});
