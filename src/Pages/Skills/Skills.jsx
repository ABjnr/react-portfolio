import { useEffect, useState } from "react";
import "./skills.css";

/**
 * Skills component that displays a grid of skill cards
 * Fetches skills data from an API and displays name and proficiency level
 * Each skill is animated and has hover effects
 */
export default function Skills() {
  const [skills, setSkills] = useState([]);

  // Fetch skills data when component mounts
  useEffect(() => {
    async function fetchSkills() {
      let url = "https://portfolio-website-steel-tau-19.vercel.app/api/skills";
      let response = await fetch(url);
      let data = await response.json();

      setSkills(data.skills || []);
    }
    fetchSkills();
  }, []);

  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
