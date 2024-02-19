import {createSlice} from "@reduxjs/toolkit"

export const NavigationIdSlice = createSlice({
    name:"Navigation",
    initialState: "",
    reducers: {
        setNavItem: (state, {payload}) => {
            return payload
       
        }
    }
})



export const {actions, reducer} = NavigationIdSlice