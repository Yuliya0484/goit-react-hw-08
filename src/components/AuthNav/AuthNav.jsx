import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <>
      <NavLink className={s.headerLink} to="/register">
        Register
      </NavLink>
      <NavLink className={s.headerLink} to="/login">
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
