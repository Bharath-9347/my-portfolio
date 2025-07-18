import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, tech, description }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p><strong>Technologies:</strong> {tech}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
