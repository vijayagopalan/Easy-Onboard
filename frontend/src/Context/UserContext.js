import React, { createContext, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducers";
export const UserContext = createContext();
const initialstate = {
    User: []
};

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initialstate);
    const value = { state, dispatch };
    // eslint-disable-next-line react/prop-types
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
};