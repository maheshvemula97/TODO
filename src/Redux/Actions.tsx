import axios from "axios";
import { Task } from "../Types";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAILURE = "FETCH_TASK_FAILURE";
export const SET_FILTER = "SET_FILTER";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const fetchTask = () => async (dispatch: any) => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const task = await res.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      completed: item.completed,
    }));
    dispatch({ type: FETCH_TASK_SUCCESS, payload: task });
  } catch (error) {
    console.error("Failed to add task", error);
  }
};
export const deleteTask = (id: number) => async (dispatch: any) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    dispatch({ type: DELETE_TASK, payload: id });
  } catch (error) {
    console.error("Failed to add task", error);
  }
};
export const addTask = (title: string) => async (dispatch: any) => {
  try {
    await axios.post(`https://jsonplaceholder.typicode.com/todos/`, {
      title: title,
      completed: false,
    });

    dispatch({
      type: ADD_TASK,
      payload: { title: title, completed: false },
    });
  } catch (error) {
    console.error("Failed to add task", error);
  }
};

export const setFilter = (filter: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  } catch (error) {
    console.error("Failed to update filter", error);
  }
};

export const toggleTask =
  (id: number, isCompleted: boolean) => async (dispatch: any) => {
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: isCompleted,
      });

      dispatch({
        type: TOGGLE_TASK,
        payload: id,
      });
    } catch (error) {
      console.error("Failed to update filter", error);
    }
  };
