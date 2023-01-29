import React from 'react';
import axios from 'axios';
import './CreateAccountScreen.scss';
const CreateAccountScreen = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post(`/api/employee/register`, {
            username: "",
            email: "",
            phone: "",
            password: ""
        });
        console.log(result);
    }

    return (
        <div className='login-container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <label> User name
                    <input type="text" name="name" />
                </label>
                <label> Email
                    <input type="text" name="name" />
                </label>
                <label> Phone
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

export default CreateAccountScreen;