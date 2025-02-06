import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-box">
      <h1 className="homepage-title">Welcome to our App!!! </h1>
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
      </div>
    </div>
  );
};

export default HomePage;
