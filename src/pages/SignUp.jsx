import React, { useState } from "react";
import axios from "axios";
// import { navigate } from "react-router-dom"; // Import navigate function from react-router-dom

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Initialize username state

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    alert("SUBMITTED");

    try {
      await axios.post("http://localhost:4000/auth/signup", {
        username,
        email,
        password,
      });
      navigate("/login"); // Corrected navigate method and path
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup bg-indigo-500 p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h3 className="text-white text-2xl mb-4">Sign Up</h3>
      <div className="mb-4">
        <label htmlFor="username" className="block text-white mb-1">Username:</label>
        <input 
          type="text" // Corrected input type to "text"
          className="w-full px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">Email:</label>
        <input 
          type="email"
          className="w-full px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white mb-1">Password:</label>
        <input 
          type="password"
          className="w-full px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className="bg-green-950 text-purple-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-purple-500 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
