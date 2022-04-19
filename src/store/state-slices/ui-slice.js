import { createSlice } from "@reduxjs/toolkit";


const feedBackSlice = createSlice({
    name: "feedback",
    initialState: {
        notification: null
    },
    reducers: {
        showNotification(state, action) {
            state.notification = action.payload
        },
        hideNotification(state){
            state.notification = null
        }
    }
})

export default feedBackSlice