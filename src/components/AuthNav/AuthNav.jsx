import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
