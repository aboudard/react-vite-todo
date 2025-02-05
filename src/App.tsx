import { observer } from "mobx-react";
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import AppStore from "./store/app-store";

const App = observer(() => {
  const [store] = useState(() => new AppStore("Vite + React 18"));
  const Home = lazy(() => import("./features/home/home"));
  const Todos = lazy(() => import("./features/todos/todos"));
  const Menu = lazy(() => import("./components/menu/menu"));
  return (
    <>
      <Suspense>
        <Menu />
      </Suspense>
      <h1>{store.title}</h1>
      <div>
        <button onClick={() => store.setTitle("Modif Title")}>
          modif title
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Suspense>
    </>
  );
});

export default App;
