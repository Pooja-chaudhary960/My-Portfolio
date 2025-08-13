import React from "react";
import "./Skill.css";

const Skills = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git", "GitHub","Python", "Django","PHP","Node.js","Express.js","MongoDB"];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
