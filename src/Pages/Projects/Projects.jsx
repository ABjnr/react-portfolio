import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import "./projects.css";

/**
 * Projects page component that fetches and displays project cards
 * Each card shows project details and links to GitHub/live site
 * Data is fetched from an external API endpoint
 */
export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects data when component mounts
  useEffect(() => {
    async function fetchProjects() {
      let url =
        "https://portfolio-website-steel-tau-19.vercel.app/api/projects";
      let response = await fetch(url);
      let data = await response.json();
      setProjects(data.projects || []);
    }
    fetchProjects();
  }, []);

  return (
    <>
      <div className="projects-wrapper">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-description">
                Description: {project.description}
              </p>
              <p className="project-tech">
                Technologies: {project.technologies}
              </p>
              <div className="project-links">
                <p>
                  <Link to={project.githubLink} className="project-link github">
                    View on GitHub
                  </Link>
                </p>
                <p>
                  <Link to={project.liveLink} className="project-link live">
                    View deployed site
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
