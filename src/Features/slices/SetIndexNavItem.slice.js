import {createSlice} from "@reduxjs/toolkit"

export const SetIndexNavItem = createSlice({
    name:"SetIndexNavItem",
    initialState: 0,
    reducers: {
        SetIndexNavItem: (state, {payload}) => {
            return payload
        },
    }
})



export const {actions, reducer} = SetIndexNavItem