import { createSlice } from "@reduxjs/toolkit";

export const SecondNavigationIdSlice = createSlice({
  name: "SecondNavigation",
  initialState: localStorage.getItem("SecondNavItem"),
  reducers: {
    setSecondNavItem: (state, { payload }) => {
      localStorage.setItem("SecondNavItem", payload);
      return payload;
    },
  },
});

export const { actions, reducer } = SecondNavigationIdSlice;
