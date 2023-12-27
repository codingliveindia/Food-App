import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: 0
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setData } = homeSlice.actions

export default homeSlice.reducer


