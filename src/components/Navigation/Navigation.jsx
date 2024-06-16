import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
