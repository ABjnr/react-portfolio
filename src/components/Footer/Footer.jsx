import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-social">
        <ul className="social-links">
          <li className="social-item">
            <Link
              to="mailto:adeniyiabraham74@gmail.com"
              title="Email"
              className="social-link"
            >
              Email
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://github.com/ABjnr"
              target="_blank"
              rel="noopener"
              title="GitHub"
              className="social-link"
            >
              GitHub
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://instagram.com/anuuoluwa"
              target="_blank"
              rel="noopener"
              title="Instagram"
              className="social-link"
            >
              Instagram
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://www.linkedin.com/in/abraham-adeniyi-1b7b2b2a2/"
              target="_blank"
              rel="noopener"
              title="LinkedIn"
              className="social-link"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>

      <footer className="footer-copyright">
        <p className="copyright-text">
          &copy; 2025 Abraham Adeniyi. All rights reserved.
        </p>
      </footer>
    </>
  );
}
