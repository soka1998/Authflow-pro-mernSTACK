import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Corrected useNavigate to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("SUBMITED");
    console.log(email ,password)

    try {
      await axios.post("http://localhost:4000/auth/signup", {
        username,
        email,
        password,
      });
      navigate("/login"); // Corrected navigate method
    } catch (error) {
      console.log(error); // Corrected error variable name
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>SignUp</h3>
      <label htmlFor="username">Username: </label>
      <input
        placeholder="username"
        type="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)} // Added onChange handler
        value={username}
      />
      <label htmlFor="email">Email address: </label>
      <input
        placeholder="email"
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)} // Added onChange handler
        value={email}
      />
      <label htmlFor="Password">Password:</label>
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password} // Added value prop
        onChange={(e) => setPassword(e.target.value)} // Added onChange handler
      />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
