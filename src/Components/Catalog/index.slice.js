import {createSlice} from "@reduxjs/toolkit"

export const indexSlice = createSlice({
    name:"index",
    initialState: 7,
    reducers: {
        setIndex: (state, {payload}) => {
            return payload
        },
        closeMenu: (state, {payload}) => {
            return payload
        }
    }
})


export const {actions, reducer} = indexSlice