import { observer } from "mobx-react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/menu/menu";
import Home from "./features/home/home";
import Todos from "./features/todos/todos";
import AppStore from "./store/app-store";

const App = observer(() => {
  const [store] = useState(() => new AppStore("Vite + React 18"));
  return (
    <>
      <Menu />
      <h1>{store.title}</h1>
      <div>
        <button onClick={() => store.setTitle("Modif Title")}>
          modif title
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
});

export default App;
