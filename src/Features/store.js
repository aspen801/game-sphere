import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { reducer as Navigation } from "./slices/NavigationId.slice.js"
import { reducer as SecondNavigation } from "./slices/SecondNavigationId.slice.js"

const reducers = combineReducers({
    NavigationIdSlice: Navigation,
    SecondNavigation: SecondNavigation,
})

export const store = configureStore({
    reducer: reducers,
})