import React, { useContext } from 'react';
import axios from 'axios';
import './CreateAccountScreen.scss';
import { UserContext } from '../Context/UserContext';
const CreateAccountScreen = () => {
    const userContextValue = useContext(UserContext);
    console.log(userContextValue)
    const onSubmit = async (e) => {
        e.preventDefault();
        userContextValue.dispatch({ type: "CREATE_USER" });
        try {
            const userData = {
                username: "A",
                email: "A",
                phone: "A",
                password: "A"
            };
            const result = await axios.post(`http://localhost:5000/api/employee/register`, userData);
            userContextValue.dispatch({ type: "CREATE_SUCCESS", payload: userData });
        }
        catch (e) {
            console.log(e)
            userContextValue.dispatch({ type: "CREATE_FAIL" });
        }
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