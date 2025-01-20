import { NavLink } from "react-router";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/todos" end>
        Todos
      </NavLink>
    </nav>
  );
};

export default Menu;
