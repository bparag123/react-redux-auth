import authSlice from "../state-slices/auth-slice";
import feedBackSlice from "../state-slices/ui-slice"

export const sendCredentials = () => {
    return async (dispatch) => {
        dispatch(feedBackSlice.actions.showNotification({title: "Loading", msg:"Signing In"}))
        const loginResponse = await fetch("https://react-cart-8597e-default-rtdb.firebaseio.com/user.json")
        if(!loginResponse.ok){
            console.log("Invalid Creadentials");
            return
        }
        const data = await loginResponse.json()
        dispatch(authSlice.actions.login(data))
        dispatch(feedBackSlice.actions.hideNotification())
    }
}