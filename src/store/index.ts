import { todoState } from "./todo/reducer";
import { createStore } from "redux";
import rootReducer from "./reducers";

export const initialState = {
  todoState,
};

export const store = createStore(rootReducer, {});
export type AppState = ReturnType<typeof rootReducer>;
