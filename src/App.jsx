// import { Router } from "express";
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from './pages/Home';

// import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route  path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
