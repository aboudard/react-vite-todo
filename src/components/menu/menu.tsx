import { observer } from "mobx-react";
import { NavLink } from "react-router";
import { useTodo } from "../../context/todos-context";

const Menu = observer(() => {
  const todosStore = useTodo();
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/todos" end>
        Todos
      </NavLink>
      <span>{todosStore.activeTodos}</span>
    </nav>
  );
});

export default Menu;
