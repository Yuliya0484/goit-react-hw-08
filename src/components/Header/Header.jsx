import Home from "../../pages/Home";
import Register from "../../pages/Register";
import LogIn from "../../pages/LogIn";

const Header = () => {
  return (
    <header>
      <nav>
        <Home />
        <div>
          <Register />
          <LogIn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
