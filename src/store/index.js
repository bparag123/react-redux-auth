import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./state-slices/auth-slice";
import feedBackSlice from "./state-slices/ui-slice";

const store = configureStore(
    {
        reducer: { auth: authSlice.reducer, feedBack : feedBackSlice.reducer }
    }
)


export default store;