import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p className="footer-copy-text">
          &#169; {`${new Date().getFullYear()}. Data provided by `}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDb
          </a>
          .
        </p>
        <p className="footer-copy-text">
          Built by Kyle Lambert. Design inspiration from Jason Ujma-Alvis.
        </p>
      </div>
      <div className="footer-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Movie Cloud Logo"
            className="footer-logo-img"
          />
        </Link>
      </div>
    </footer>
  );
};
