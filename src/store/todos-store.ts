import { makeAutoObservable } from "mobx";
import { Todo } from "../features/todos/todos";

class TodosStore {
  todos: Todo[] = [{ id: 1, text: "Learn React Vite", active: true }];
  newTodo = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text: string) {
    this.todos = [...this.todos, { id: this.todos.length + 1, text, active: false }];
    this.newTodo = "";
  }

  toggleTodoActive(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          active: !todo.active,
        };
      }
      return todo;
    });
  }
}

export default TodosStore;
