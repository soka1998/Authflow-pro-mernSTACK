import React, { useState } from "react";
import axios from "axios";


const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(email +" "+ password);

 
  }
  return (
    <form className="login" onsubmit={handleSubmit}>
      <h3>Login</h3>
      <label htmlFor="email">Email: </label>
      <input 
      type="email"
      onChange= {(e) => setEmail(e.target.value)}
      value={email}
      />
      <label htmlFor="email">Password: </label>
      <input 
      type="password"
      onChange= {(e) => setPassword(e.target.value)}
      value={password}
      />
      <button>Log In</button>
      
   
    </form>

  )
}

export default Login
