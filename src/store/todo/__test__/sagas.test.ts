import { put, takeEvery } from "redux-saga/effects";
import { addTodoSuccessAction } from "../action";
import { handleFetch, watchTodo } from "../sagas";
import { AddTodoAction, TodoActionTypes } from "../types";
import { payments } from "./testData";

describe("sagas", () => {
  it("should listen all the actions", () => {
    const gen = watchTodo();
    expect(gen.next().value).toEqual(
      takeEvery(TodoActionTypes.AddTodo, handleFetch)
    );
  });

  it("should listen to ADD_TODO", () => {
    const action: AddTodoAction = {
      type: TodoActionTypes.AddTodo,
    };
    const gen = handleFetch(action);
    expect(gen.next().value).toEqual(put(addTodoSuccessAction(payments)));
  });
});
