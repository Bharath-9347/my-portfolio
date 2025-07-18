import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h2>Bank Statement Analysis & Loan Eligibility System</h2>
        <p><strong>Technologies:</strong> Python, OCR, NLP, Machine Learning</p>
        <p>
          An intelligent system to analyze uploaded bank statements and determine loan eligibility.
          Uses Optical Character Recognition, Natural Language Processing, and ML models for predictions.
        </p>
      </div>

      <div className="project-card">
        <h2>Quick Resume – React Based Resume Generator</h2>
        <p><strong>Technologies:</strong> React, HTML, CSS, JavaScript</p>
        <p>
          A web app that helps users quickly generate professional resumes. It ensures a
          dynamic and responsive user experience with form inputs and previews.
        </p>
      </div>

      <div className="project-card">
        <h2>Restaurant Website – Basic Food Ordering System</h2>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        <p>
          A simple, menu-based food ordering website with user-friendly navigation and item selection functionality.
        </p>
      </div>
    </div>
  );
}

export default Projects;
