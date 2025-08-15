import { Link, NavLink } from "react-router";
import "./header.css";

/**
 * Header component that provides navigation and branding
 * Uses NavLink for active link styling and Link for logo
 */
export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/" className="header-logo">
          Abraham Adeniyi
        </Link>
      </h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">
              My Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
