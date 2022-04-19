import { createSlice } from "@reduxjs/toolkit";
//This is a State slice for handle the UI Component states
const feedBackSlice = createSlice({
    name: "feedback",
    initialState: {
        notification: null
    },
    //This is for giving feedback to the users about ongoing process
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