import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions";
const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    if (title) dispatch(addTask(title));
    setTitle("");
  };
  return (
    <form onSubmit={handlerSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
        className="task-input"
      />
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};
export default TaskForm;
