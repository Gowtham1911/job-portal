import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div>
        <p>Working schedule</p>
        <label><input type="checkbox" /> Full time</label>
        <label><input type="checkbox" /> Part time</label>
        <label><input type="checkbox" /> Internship</label>
      </div>
      <div>
        <p>Employment type</p>
        <label><input type="checkbox" /> Full day</label>
        <label><input type="checkbox" /> Flexible schedule</label>
      </div>
    </div>
  );
};

export default Sidebar;
