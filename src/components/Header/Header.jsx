import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./Header.module.css";
import { PiAddressBookDuotone } from "react-icons/pi";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <h3>
        Make Your PhoneBook{" "}
        <span>
          <PiAddressBookDuotone className="icon" />
        </span>
      </h3>
      {isLoggedIn && <p className={s.text}>Welcome, {user.name}</p>}
      <nav>
        <NavLink className={s.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={s.headerLink} to="/phonebook">
          PhoneBook
        </NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        ) : (
          <>
            <NavLink className={s.headerLink} to="/register">
              Register
            </NavLink>
            <NavLink className={s.headerLink} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
