import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import "./HomePage.css";

const jobs = [
  {
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: ["Part time", "Senior level", "Distant"],
    price: "$250/hr",
    location: "San Francisco, CA",
    date: "20 May, 2023",
  },
  {
    company: "Google",
    role: "Junior UI/UX Designer",
    type: ["Full time", "Junior level", "Distant"],
    price: "$150/hr",
    location: "California, CA",
    date: "4 Feb, 2023",
  },
  {
    company: "Dribbble",
    role: "Senior Motion Designer",
    type: ["Part time", "Senior level", "Full Day"],
    price: "$260/hr",
    location: "New York, NY",
    date: "29 Jan, 2023",
  },
  // Add more jobs as needed...
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="main-section">
        <Sidebar />
        <div className="job-section">
          <h2>Recommended Jobs</h2>
          <div className="job-cards">
            {jobs.map((job, idx) => (
              <JobCard key={idx} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
