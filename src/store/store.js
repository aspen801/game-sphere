import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as navigation } from "./slices/navigationId.slice.js";
import { reducer as secondNavigation } from "./slices/secondNavigationId.slice.js";
import { reducer as setIndexNavItem } from "./slices/setIndexNavItem.slice.js";

const reducers = combineReducers({
  navigationIdSlice: navigation,
  secondNavigation,
  setIndexNavItem,
});

export const store = configureStore({
  reducer: reducers,
});
