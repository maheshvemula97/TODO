import { useDispatch } from "react-redux";
import { Task } from "../Types";
import { deleteTask, toggleTask } from "../Redux/Actions";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={`task-card ${task.completed ? "completed" : "pending"}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id, !task.completed))}
          className="task-checkbox"
        />
        <div className="task-details">
          <span className={`task-title ${task.completed ? "completed" : ""}`}>
            {task.title}
          </span>
          <span
            className={`task-status ${
              task.completed ? "completed" : "pending"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="task-delete"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
