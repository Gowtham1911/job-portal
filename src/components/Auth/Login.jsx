import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your Job Portal Account</p>
        <form className="login-form">
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
