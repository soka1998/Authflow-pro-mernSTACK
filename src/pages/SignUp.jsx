import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Corrected useNavigate to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("SUBMITED");

    try {
      await axios.post("http://localhost:4000/auth/signup", {
        // Corrected endpoint path
        username,
        email,
        password,
      });
      navigate("/Login"); // Corrected navigate method
    } catch (error) {
      console.log(error); // Corrected error variable name
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-80 rounded-2xl bg-slate-900">
        <div className="flex flex-col gap-2 p-8">
          <p className="text-center text-3xl text-purple-700 mb-4">Register</p>
          <input
            className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
            placeholder="Username"
            type="text"
            name="username"
            id=""
            value={username} // Added value prop
            onChange={(e) => setUsername(e.target.value)} // Added onChange handler
          />
          <input
            className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
            placeholder="Email"
            type="email"
            name="email"
            id=""
            value={email} // Added value prop
            onChange={(e) => setEmail(e.target.value)} // Added onChange handler
          />
          <input
            className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
            placeholder="Password"
            type="password"
            name="password"
            id=""
            value={password} // Added value prop
            onChange={(e) => setPassword(e.target.value)} // Added onChange handler
          />
          <Link to="/">
            {" "}
            <button
              className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
              onClick={handleSubmit} // Added onClick handler
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
