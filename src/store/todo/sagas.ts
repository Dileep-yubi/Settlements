import { put, takeEvery } from "redux-saga/effects";
import { Payment } from "../../components/BreakDown/types";
import { addTodoFailureAction, addTodoSuccessAction } from "./action";
import { AddTodoAction, TodoActionTypes } from "./types";
import { payments } from "./__test__/testData";

export function* handleFetch(action: AddTodoAction) {
  const response: Array<Payment> = payments;
  if (response) {
    yield put(addTodoSuccessAction(response));
  } else {
    yield put(addTodoFailureAction());
  }
}

export function* watchTodo() {
  yield takeEvery(TodoActionTypes.AddTodo, handleFetch);
}
