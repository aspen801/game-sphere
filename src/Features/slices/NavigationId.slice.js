import {createSlice} from "@reduxjs/toolkit"

export const NavigationIdSlice = createSlice({
    name:"Navigation",
    initialState: "Пк та комплектуючі",
    reducers: {
        setNavItem: (state, {payload}) => {
            return payload
       
        },
    }
})



export const {actions, reducer} = NavigationIdSlice