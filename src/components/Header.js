import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSlice from '../store/state-slices/auth-slice';

const Header = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const userData = useSelector(state => state.auth.userData)
    const dispatch = useDispatch()

    const onLogoutHandler = () => {
        dispatch(authSlice.actions.logout())
    }

    return (
        <div>

            {isLoggedIn ? <>
                Welcome {userData.username}. Your Email Id is {userData.email}
                <button onClick={onLogoutHandler}>Logout</button>
            </> : <p>Welcome User</p>}


        </div>
    );
}

export default Header;
