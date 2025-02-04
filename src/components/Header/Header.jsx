import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header>
      <h2>Make Your PhoneBook</h2>
      {isLoggedIn && <p>Welcome, {user.name}</p>}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">PhoneBook</NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
