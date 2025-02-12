import { PiAddressBookDuotone } from "react-icons/pi";

import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <h3>
        Create Your PhoneBook{" "}
        <span>
          <PiAddressBookDuotone className="icon" />
        </span>
      </h3>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
