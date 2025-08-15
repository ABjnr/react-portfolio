import { Link } from "react-router";
import "./Home.css";

/**
 * Home page component displaying personal introduction
 * and primary navigation links to Projects and About pages
 */
export default function Home() {
  return (
    <>
      <div className="home-wrapper">
        <h2 className="home-title">Abraham Adeniyi</h2>
        <div className="home-intro">
          Backend developer building systems to streamline workflows and solve
          real-world problems.
        </div>
        <div className="home-description">
          Over 2 years' experience building reliable backend solutions with
          JavaScript, Node.js, MongoDB, and MySQL.
        </div>

        <div className="home-links">
          <p>
            <Link to="/projects" className="home-link">
              My Projects
            </Link>
          </p>
          <p>
            <Link to="/about" className="home-link">
              About Me
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
