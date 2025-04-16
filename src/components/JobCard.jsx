import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <p className="date">{job.date}</p>
      <h4>{job.role}</h4>
      <p className="company">{job.company}</p>
      <div className="tags">
        {job.type.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <p className="price">{job.price}</p>
      <p className="location">{job.location}</p>
      <button className="details-btn">Details</button>
    </div>
  );
};

export default JobCard;
