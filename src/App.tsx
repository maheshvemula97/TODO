import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import FilterButtons from "./Components/FilterButtons";
import { fetchTask } from "./Redux/Actions";
import "./styles.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">Task Manager</h1>
        <div className="app-controls">
          <TaskForm />
          <FilterButtons />
        </div>
        <TaskList />
      </div>
    </div>
  );
};

export default App;
