import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { reducer } from "../Components/Catalog/index.slice"

const reducers = combineReducers({
    index: reducer
})

export const store = configureStore({
    reducer: reducers,
})