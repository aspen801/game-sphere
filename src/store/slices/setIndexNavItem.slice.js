import { createSlice } from "@reduxjs/toolkit";

export const SetIndexNavItem = createSlice({
  name: "SetIndexNavItem",
  initialState: localStorage.getItem("NavItem"),
  reducers: {
    SetIndexNavItem: (state, { payload }) => {
      localStorage.setItem("NavItem", payload);
      return payload;
    },
  },
});

export const { actions, reducer } = SetIndexNavItem;
