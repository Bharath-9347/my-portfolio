import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="summary">
        I'm <strong>G Bharath</strong>, an MCA student passionate about full stack development,
        data-driven applications, and solving real-world problems with technology.
        I have hands-on experience in React, JavaScript, HTML/CSS, and backend integration.
        I enjoy building responsive and functional web applications.
      </p>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li><strong>Programming:</strong> Java, Python</li>
        <li><strong>Web:</strong> HTML, CSS, JavaScript, React</li>
        <li><strong>Database:</strong> SQL, MySQL</li>
        <li><strong>Tools:</strong> Git & GitHub</li>
      </ul>
    </div>
  );
}

export default About;
