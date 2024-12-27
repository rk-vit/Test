import React from 'react';
import './LandingPage.css'; // For styling
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Welcome to NOTER</h1>
        <p>Your personal space for ideas, tasks, and inspiration!</p>
      </div>

      <div className="quote-section">
        <blockquote>
          "The secret of getting ahead is getting started."  
        </blockquote>
        <cite>— Mark Twain</cite>
      </div>

      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
