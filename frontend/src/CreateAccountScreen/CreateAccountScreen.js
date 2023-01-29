import React from 'react';
import axios from 'axios';
import './CreateAccountScreen.scss';
const CreateAccountScreen = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post(`http://localhost:5000/api/employee/register`, {
            username: "A",
            email: "A",
            phone: "A",
            password: "A"
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