import { Payment } from "../../components/BreakDown/types";

export enum TodoActionTypes {
  AddTodo = "@@todo/ADD_TODO",
  AddTodoSuccess = "@@todo/ADD_TODO_SUCCESS",
  AddTodoFailure = "@@todo/ADD_TODO_FAILURE",
}

export type TodoInitialState = {
  todoList: string[];
  bankName: string;
  isLoading: boolean;
  payments: Array<Payment>;
};
export type AddTodoPayload = {
  todo: string;
};
export type AddTodoAction = {
  type: typeof TodoActionTypes.AddTodo;
};

export type AddTodoActionSuccess = {
  type: typeof TodoActionTypes.AddTodoSuccess;
  payload: { payments: Array<Payment> };
};

export type AddTodoActionFailure = {
  type: typeof TodoActionTypes.AddTodoFailure;
};
export type TodoActions =
  | AddTodoAction
  | AddTodoActionSuccess
  | AddTodoActionFailure;
