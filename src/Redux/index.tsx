import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Reducers";
import thunk from "redux-thunk";
export const store = configureStore({ reducer: taskReducer });
export type RouteState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
export default store;
