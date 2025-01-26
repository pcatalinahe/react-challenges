import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* nav bar */}
      <div>
        <nav className="navbar">
          <Link to="/">Counter</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/todo">To-Do List</Link>
        </nav>
      </div>

      {/* main content */}
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
              <button id="down" onClick={() => setCount((count) => count - 1)}>
                ⌄
              </button>
              </div>
            </div>
          }
        />
        <Route path="./MovieSearch" element={<div>Movies</div>} />
        <Route path="/MovieResult" element={<div>Movies</div>} />
        <Route path="/todo" element={<div>To-Do List</div>} />
      </Routes>
    </>
  );
}

export default App;
