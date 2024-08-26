import {
  HomeIcon,
  MoviesIcon,
  SearchIcon,
  TvShowIcon,
} from "@/components/icons";

import { NavLink } from "react-router-dom";

import "./styles.scss";

export const Sidebar = () => {
  return (
    <header className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              to="/"
            >
              <HomeIcon />
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              to="/movies"
            >
              <MoviesIcon />
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              to="/tv-shows"
            >
              <TvShowIcon />
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              to="/search"
            >
              <SearchIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
