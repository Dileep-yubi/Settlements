import { TodoActions, TodoActionTypes, TodoInitialState } from "./types";
import produce, { Draft } from "immer";
import { Reducer } from "redux";

export const initialState: TodoInitialState = {
  todoList: [],
  bankName: "SMARTBank",
};

export const todoState: Reducer<TodoInitialState, TodoActions> = produce(
  (draftState: Draft<TodoInitialState>, action: TodoActions) => {
    console.log("todoState");
    switch (action.type) {
      case TodoActionTypes.AddTodo: {
        draftState.todoList.push(action.payload.todo);
      }
    }
  },
  initialState
);
