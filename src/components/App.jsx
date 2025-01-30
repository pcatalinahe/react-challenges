import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import MovieSearch from "./MovieSearch";
import ToDoList from "./ToDoList";
import TaskDetail from "./TaskDetail";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" id="counter-link">
            Counter
          </Link>
          <Link to="/movies" id="movies-link">
            Movies
          </Link>
          <Link to="/todo" id="todo-link">
            To-Do List
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="card">
              <p id="count">count is {count}</p>
              <div id="reset">
                <button id="up" onClick={() => setCount((count) => count + 1)}>
                  ^
                </button>
                <button
                  id="down"
                  onClick={() => setCount((count) => count - 1)}
                >
                  ⌄
                </button>
              </div>
            </div>
          }
        />
        <Route path="/movies" element={<MovieSearch />} />
        <Route
          path="/todo"
          element={<ToDoList tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/todo/:id"
          element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </>
  );
}

export default App;
