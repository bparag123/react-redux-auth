import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCredentials } from "../store/custom-actions/auth-action"

const Loginform = () => {

    const notification = useSelector(state => state.feedBack.notification)
    console.log(notification);
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(sendCredentials())
    }

    return (
        <form action="" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="text" onChange={onChangeHandler} name="email" id="email" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={onChangeHandler} name="password" id="password" />
            <br />
            <button type='submit'> {notification ? notification.msg : "Login"}</button>
        </form>
    )
}

export default Loginform;
