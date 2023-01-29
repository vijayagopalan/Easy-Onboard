import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>New User</Link>
        </div>
    );
};

export default Home;