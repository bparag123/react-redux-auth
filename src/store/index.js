import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./state-slices/auth-slice";
import feedBackSlice from "./state-slices/ui-slice";

//This is a central State for the application
const store = configureStore(
    //This will be combination of the reducers of different Slices
    {
        reducer: { auth: authSlice.reducer, feedBack : feedBackSlice.reducer }
    }
)


export default store;