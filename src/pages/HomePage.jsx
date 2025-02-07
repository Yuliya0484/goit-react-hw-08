import { NavLink } from "react-router-dom";
import { PiHandHeartDuotone } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="homepage-box">
      <div className="homepage-text-box">
        <div className="text-wrap">
          <NavLink to="/register" className="homepage-text">
            If you want to create your own PhoneBook, please register!
          </NavLink>
        </div>
        <div className="text-wrap">
          <NavLink to="/login" className="homepage-text">
            If you are already registered, welcome to your application!
          </NavLink>
        </div>
        <div className="text-wrap">
          <NavLink to="/phonebook" className="homepage-text">
            Let's go to create your PhoneBook!
          </NavLink>
        </div>
      </div>
      <h1 className="title">
        Welcome to our App{" "}
        <span>
          <PiHandHeartDuotone />
        </span>{" "}
      </h1>
    </div>
  );
};

export default HomePage;
