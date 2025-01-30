import { useState } from "react";
import { Link } from "react-router-dom";
import "../ToDo.css";

const ToDoList = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul className="todo-list">
      {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <Link to={`/todo/${task.id}`}>{task.name}</Link>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="no-tasks-message">No tasks yet... I'm sure you have something to do...</p>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
