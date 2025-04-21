import { TaskState } from "../Types";
import {
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  ADD_TASK,
  DELETE_TASK,
  SET_FILTER,
  TOGGLE_TASK,
} from "./Actions";
const intialState: TaskState = { tasks: [], filter: "all", status: "idle" };
const taskReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        status: "Succeded",
        tasks: action.payload,
      };
    case ADD_TASK:
      console.log("add task", action);

      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.tasks?.length + 1, ...action.payload },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id != action.payload),
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id == action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return { ...item };
          }
        }),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default taskReducer;
