import { observer } from "mobx-react";
import { useState } from "react";
import TodosStore from "../../store/todos-store";

export interface Todo {
  id: number;
  text: string;
  active?: boolean;
}

const Todos = observer(() => {
  const [todosStore] = useState(() => new TodosStore());
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    // setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
    todosStore.addTodo(newTodo);
    setNewTodo("");
  };

  const toggleTodoActive = (id: number) => {
    todosStore.toggleTodoActive(id);
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo} disabled={!newTodo.trim()}>
        Add Todo
      </button>
      <ul>
        {todosStore.todos.map((todo) => (
          <li key={todo.id}>{todo.text} / <input type="checkbox" checked={todo.active} onChange={() => toggleTodoActive(todo.id)} /></li>
        ))}
      </ul>
    </div>
  );
});

export default Todos;
