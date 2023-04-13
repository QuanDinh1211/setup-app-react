import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
    //   const response = await fetchCount(amount);
      const response = {data: 1}
      
      return response.data;
    }
  );