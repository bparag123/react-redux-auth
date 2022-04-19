import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice(
    {
        name: 'auth',
        initialState: { isLoggedIn: false , userData: undefined},
        reducers: {
            login(state, action) {
                state.userData = action.payload
                state.isLoggedIn = true
            },
            logout(state) {
                state.isLoggedIn = false
                state.userData = undefined
            }
        }
    }
)
export default authSlice