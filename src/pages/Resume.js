import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <p>You can view or download my latest resume using the buttons below.</p>

      <div className="btn-group">
        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/My-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          👁️ View Resume
        </a>

        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/My-Resume.pdf"
          download="G-Bharath-Resume.pdf"
          className="btn-resume"
        >
          📥 Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
