import { Outlet } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";

const Layout = () => {
  return (
    <div>
      <UserMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
