import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { reducer as Navigation } from "./slices/NavigationId.slice.js"
import { reducer as SecondNavigation } from "./slices/SecondNavigationId.slice.js"
import { reducer as SetIndexNavItem } from "./slices/SetIndexNavItem.slice.js"

const reducers = combineReducers({
    NavigationIdSlice: Navigation,
    SecondNavigation: SecondNavigation,
    SetIndexNavItem: SetIndexNavItem,
})

export const store = configureStore({
    reducer: reducers,
})