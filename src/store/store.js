import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./slice/homeSlice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});

export default store;
