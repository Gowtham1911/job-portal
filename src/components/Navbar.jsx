import React from "react";
import "./Navbar.css";

const Navbar = ({ onProfileClick }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">LuckyJob</h1>
      <div className="filters">
        <select><option>Designer</option></select>
        <select><option>Location</option></select>
        <select><option>Experience</option></select>
        <input type="range" min="1200" max="20000" />
      </div>
      <div className="profile" onClick={onProfileClick}>
        <span>New York, NY</span>
        <img src="https://i.pravatar.cc/30" alt="avatar" className="avatar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
