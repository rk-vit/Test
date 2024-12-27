import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    try{
      const response = await axios.post("https://noter-app-server.vercel.app/login", { username: email, password: password },{withCredentials:true});
      console.log(response.status);
      if(response.status==200){
          navigate("/home");
      }
    }catch(err){
        console.log("Error logging in :-"+err)
    }
    
    };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          name="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          name="password"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="login-text">
        Don't have an account?{" "}
        <span className="login-link" onClick={goToRegister}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
