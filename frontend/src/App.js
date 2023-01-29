import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginScreen from "./LoginScreen/LoginScreen";
import CreateAccountScreen from "./CreateAccountScreen/CreateAccountScreen";
import Logo from './Assets/Images/Logo.jpg';
import './App.scss';
function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <header>
          <div className="logo">
            <img className="logo-image" src={Logo} alt="Logo"></img>
          </div>
          <span className="header-title">Easy onboarding </span>
        </header>
        <div className="main-container">
          <Routes>
            <Route path={'/'} exact element={<Home />} />
            <Route path={'/login'} exact element={<LoginScreen />} />
            <Route path={'/newaccount'} exact element={<CreateAccountScreen />} />
          </Routes>
        </div>
        <footer>
          <span className="copy-right">@copyright 2023-2024</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
