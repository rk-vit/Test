import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import axios from "axios";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    console.log("Registering user:", { name, email, password });
    try{
        const response = await axios.post("https://noter-app-server.vercel.app/register",{user:email,name:name,pass:password});
        if(response.status===201){
            navigate("/login");
        }
    }catch(err){
        console.log("Error in registration  :-"+err)
    }
    };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="email"
          name="username"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p className="register-text">
        Already have an account?{" "}
        <span className="register-link" onClick={goToLogin}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
