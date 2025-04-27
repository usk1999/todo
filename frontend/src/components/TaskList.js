import React from "react";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task._id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => toggleComplete(task._id, task.completed)}
          >
            {task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task._id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
