import { categoriesApi } from "@/services/categories.api.js";
import { homePageApi } from "@/services/homePage.api.js";
import { productsApi } from "@/services/products.api.js";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as navigation } from "./slices/navigationId.slice.js";
import { reducer as secondNavigation } from "./slices/secondNavigationId.slice.js";
import { reducer as setIndexNavItem } from "./slices/setIndexNavItem.slice.js";

const reducers = combineReducers({
  navigationIdSlice: navigation,
  secondNavigation,
  setIndexNavItem,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [homePageApi.reducerPath]: homePageApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      homePageApi.middleware,
      productsApi.middleware,
    ),
});
