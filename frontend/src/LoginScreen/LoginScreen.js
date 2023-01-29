import React from 'react';
import './Loginscreen.scss'
const LoginScreen = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login-container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <label> User name
                    <input type="text" name="name" />
                </label>
                <label> Password
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default LoginScreen;