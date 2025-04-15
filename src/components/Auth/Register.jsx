// src/components/Auth/Register.jsx
import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering", user);
    // TODO: Add backend integration here
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create Account 🚀</h2>
        <p className="register-subtitle">Join the Job Portal Today</p>

        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <button type="submit">Register</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
