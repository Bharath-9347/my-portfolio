import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1>My Experience</h1>

      <div className="exp-card">
        <h2>Web Development Intern</h2>
        <p><strong>Organization:</strong> Suvidha Foundation</p>
        <p><strong>Duration:</strong> Feb – Mar 2025</p>
        <p>
          Contributed to building responsive and user-friendly web applications using
          HTML, CSS, and JavaScript. Focused on modern design and accessibility.
        </p>
        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/Suvidha%20Internship.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view"
        >
          📄 View Certificate
        </a>
      </div>

      <div className="exp-card">
        <h2>Web Development Intern</h2>
        <p><strong>Organization:</strong> MotionCut</p>
        <p><strong>Duration:</strong> May 15 – June 30</p>  
        <p>
          Worked on responsive and interactive web applications using HTML, CSS,
          JavaScript, and modern web tools. Continuously learning and improving frontend practices.
        </p>
        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/Motion%20Internship%20.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view"
        >
          📄 View Certificate
        </a>
      </div>
    </div>
  );
}

export default Experience;
