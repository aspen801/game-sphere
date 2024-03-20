import { createSlice } from "@reduxjs/toolkit";

export const NavigationIdSlice = createSlice({
  name: "Navigation",
  initialState: localStorage.getItem("NavItemText"),
  reducers: {
    setNavItem: (state, { payload }) => {
      localStorage.setItem("NavItemText", payload);
      return payload;
    },
  },
});

export const { actions, reducer } = NavigationIdSlice;
