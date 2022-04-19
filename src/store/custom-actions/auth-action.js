import authSlice from "../state-slices/auth-slice";
import feedBackSlice from "../state-slices/ui-slice"

//Actually Reducers are not accepting async operations
//So i have created the custom action which will handle async code and dispatch the events accordingly
//Here this is a kind of dispatch factory
//We can call this kind of actions via dispatch()

export const sendCredentials = () => {
    return async (dispatch) => {
        //Setting the feedback
        dispatch(feedBackSlice.actions.showNotification({ title: "Loading", msg: "Signing In" }))

        const loginResponse = await fetch("https://react-cart-8597e-default-rtdb.firebaseio.com/user.json")
        if (!loginResponse.ok) {
            console.log("Invalid Creadentials");
            return
        }

        const data = await loginResponse.json()
        //Dispatching the Login Action 
        dispatch(authSlice.actions.login(data))
        //Hiding the notification
        dispatch(feedBackSlice.actions.hideNotification())
    }
}