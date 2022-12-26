import { Payment } from "../../components/BreakDown/types";
import {
  AddTodoAction,
  AddTodoActionFailure,
  AddTodoActionSuccess,
  TodoActionTypes,
} from "./types";

export const addTodoAction = (): AddTodoAction => {
  console.log("addTodoAction");
  return {
    type: TodoActionTypes.AddTodo,
  };
};

export const addTodoSuccessAction = (
  payments: Array<Payment>
): AddTodoActionSuccess => {
  console.log("addTodoSuccessAction");
  return {
    type: TodoActionTypes.AddTodoSuccess,
    payload: { payments },
  };
};

export const addTodoFailureAction = (): AddTodoActionFailure => {
  return {
    type: TodoActionTypes.AddTodoFailure,
  };
};
