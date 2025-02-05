import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import TodosStore from "../store/todos-store";

const TodoContext = createContext<TodosStore>(null!);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store] = useState(new TodosStore());
  return <TodoContext.Provider value={store}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
