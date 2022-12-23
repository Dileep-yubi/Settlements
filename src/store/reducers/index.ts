import { combineReducers } from "redux";
import { todoState } from "../todo/reducer";

const rootReducer = combineReducers({
  todoState,
});

export default rootReducer;
