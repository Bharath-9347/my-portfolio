import React from "react";
import "./Certifications.css";

function Certifications() {
  return (
    <div className="cert-container">
      <h1>My Certifications</h1>

      <div className="cert-card">
        <h2>Data Mining</h2>
        <p><strong>Platform:</strong> NPTEL (IIT Kharagpur)</p>
        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/Data%20Mining.pdf" // You can replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view"
        >
          View Certificate
        </a>
      </div>

      <div className="cert-card">
        <h2>Java Full Stack</h2>
        <p><strong>Platform:</strong> Frontlines Edutech Pvt Ltd</p>
        <a
          href="https://github.com/Bharath-9347/Certificates/blob/main/JavaFS%20Ceritificate.jpg" // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default Certifications;
