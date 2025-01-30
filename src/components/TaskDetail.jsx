import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../ToDo.css";

const TaskDetail = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(id));

  const [editedTask, setEditedTask] = useState(task?.name || "");

  const handleUpdateTask = () => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, name: editedTask } : t))
    );
    navigate("/todo");
  };

  if (!task) {
    return <p className="no-tasks-message">Task not found!</p>;
  }

  return (
    <div className="task-detail-container">
      <h1 className="task-detail-title">Edit Task</h1>
      <div className="task-detail-form">
        <input
          type="text"
          className="task-detail-input"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <div className="button-container">
          <button className="save-button" onClick={handleUpdateTask}>
            Save
          </button>
          <button className="back-button" onClick={() => navigate("/todo")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
