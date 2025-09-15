import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1>My Education</h1>

      <div className="edu-card">
        <h2>Master of Computer Applications (MCA)</h2>
        <p><strong>Institution:</strong> MSRIT</p>
        <p><strong>CGPA:</strong> 7.74</p>
        <p><strong>Year:</strong> 2023 – 2025</p>
      </div>

      <div className="edu-card">
        <h2>B.Sc in Computer Science</h2>
        <p><strong>Institution:</strong> Dr. JDC</p>
        <p><strong>CGPA:</strong> 7.35</p>
        <p><strong>Year:</strong> 2022</p>
      </div>

      <div className="edu-card">
        <h2>Higher Secondary (XII – Science)</h2>
        <p><strong>Institution:</strong> Dr. JJC</p>
        <p><strong>CGPA:</strong> 7.44</p>
        <p><strong>Year:</strong> 2019</p>
      </div>

      <div className="edu-card">
        <h2>SSLC (X)</h2>
        <p><strong>CGPA:</strong> 8.7</p>
        <p><strong>Year:</strong> 2017</p>
      </div>
    </div>
  );
}

export default Education;
