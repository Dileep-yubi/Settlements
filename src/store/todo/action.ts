import { AddTodoAction, TodoActionTypes } from "./types";

export const addTodoAction = (todo: string): AddTodoAction => {
  console.log("addTodoAction");
  return {
    type: TodoActionTypes.AddTodo,
    payload: { todo },
  };
};
