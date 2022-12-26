import { TodoActions, TodoActionTypes, TodoInitialState } from "./types";
import produce, { Draft } from "immer";
import { Reducer } from "redux";

export const initialState: TodoInitialState = {
  todoList: [],
  bankName: "SMARTBank",
  isLoading: false,
  payments: [],
};

export const todoState: Reducer<TodoInitialState, TodoActions> = produce(
  (draftState: Draft<TodoInitialState>, action: TodoActions) => {
    console.log("todoState");
    switch (action.type) {
      case TodoActionTypes.AddTodo: {
        console.log("AddTodo reducer");
        draftState.isLoading = true;
        break;
      }

      case TodoActionTypes.AddTodoSuccess: {
        console.log("AddTodoSuccess reducer");
        draftState.isLoading = false;
        draftState.payments = action.payload.payments;
        break;
      }
      case TodoActionTypes.AddTodoFailure: {
        draftState.isLoading = false;
        break;
      }
    }
  },
  initialState
);
