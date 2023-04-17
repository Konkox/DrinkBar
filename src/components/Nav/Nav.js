import { NavLink, Outlet } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <h2>DRINK BAR</h2>

      <nav>
        <NavLink to="carbo" className="nav">
          Carbonated Drinks (Banks for now...) Page
        </NavLink>
        <NavLink to="drinkers" className="nav">
          Drinkers Page
        </NavLink>
        <NavLink to="juices" className="nav">
          Juices Page
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Nav;
