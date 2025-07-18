import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Hello, I'm <span className="name-highlight">G Bharath</span></h1>
      <h2>Aspiring Full Stack Developer</h2>
      <p>
        Welcome to my portfolio website! I'm passionate about building web applications,
        working with modern technologies, and continuously learning.
      </p>
      <a href="/resume" className="btn">View My Resume</a>
    </div>
  );
}

export default Home;
