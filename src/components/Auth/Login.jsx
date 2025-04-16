import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual auth logic here
    navigate("/home"); // ✅ Redirect to home after login
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your Job Portal Account</p>
        <form className="login-form" onSubmit={handleSubmit}> {/* ✅ Add onSubmit */}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="signup-text">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
