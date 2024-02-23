import {createSlice} from "@reduxjs/toolkit"

export const SecondNavigationIdSlice = createSlice({
    name:"SecondNavigation",
    initialState: "",
    reducers: {
        setSecondNavItem: (state, {payload}) => {
            return payload
       
        }
    }
})



export const {actions, reducer} = SecondNavigationIdSlice