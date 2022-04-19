import { createSlice } from "@reduxjs/toolkit"

//This is a State Slice which will be managing Login State
const authSlice = createSlice(
    {
        name: 'auth',
        initialState: { isLoggedIn: false , userData: undefined},
        //These all reducer functions will be available as a property of the actions of this slice
        reducers: {
            //Here it is okay to mutate the actual state
            //In Back door Redux will create a copy of the actual state and edit it with the modified value
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