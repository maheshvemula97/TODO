import React from "react";
import { useSelector } from "react-redux";
import { Task, TaskState } from "../Types";
import { RootState } from "../Redux/Store";
import TaskItem from "./TaskItem";
const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => {
    console.log("state", state);
    if (state.filter == "completed") {
      return state.tasks.filter((item: any) => item.completed);
    }
    if (state.filter == "pending") {
      return state.tasks.filter((item: any) => !item.completed);
    }
    if (state.filter == "all") {
      return state.tasks;
    }
  });
  console.log("tasks", tasks);
  return (
    <div>
      {tasks?.map((item: any) => (
        <TaskItem task={item} />
      ))}
    </div>
  );
};
export default TaskList;
