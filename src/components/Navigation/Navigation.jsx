import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
