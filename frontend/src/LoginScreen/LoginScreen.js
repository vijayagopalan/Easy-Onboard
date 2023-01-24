import React from 'react';

const LoginScreen = () => {
    return (
        <div className='login-container'>
            <form>
                <label> User name
                <input type="text" name="name" />
                </label>
                <label> Password
                <input type="text" name="name" />
                </label>
            </form>
        </div>
    );
}; 

export default LoginScreen;