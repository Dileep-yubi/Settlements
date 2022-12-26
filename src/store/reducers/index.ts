import { combineReducers } from "redux";
import { todoState } from "../settlements/reducer";

const rootReducer = combineReducers({
  todoState,
});

export default rootReducer;
