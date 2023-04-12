import { createSelector } from "@reduxjs/toolkit";

export const selectHome = createSelector(
  (state) => state.home.count,
  (state) => state.home.name,
  (count, name) => count + name
);
