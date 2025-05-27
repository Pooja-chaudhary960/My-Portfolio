import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { title: "Project One", description: "Coursera website.", link: "https://github.com/Pooja-chaudhary960/React-Assignment" },
    { title: "Project Two", description: "Ecommerce.", link: "https://github.com/Pooja-chaudhary960/Ecommerce-website" },
    { title: "Project Three", description: "Thakali Restaurant.", link: "https://github.com/Pooja-chaudhary960/Thakali-Restaurant" },
    { title: "Project Four", description: "Hospital Management System.", link: "https://github.com/Pooja-chaudhary960/Hospital-Management" },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" className="btn-small">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
