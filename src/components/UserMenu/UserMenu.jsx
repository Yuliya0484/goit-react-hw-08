import { useDispatch, useSelector } from "react-redux";
//import { NavLink } from "react-router-dom";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
//import AuthNav from "../AuthNav/AuthNav";

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      {isLoggedIn && <p className={s.text}>Welcome, {user.name}</p>}
      <nav>
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      </nav>
    </div>
  );
};

export default UserMenu;
