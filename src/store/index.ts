import { todoState } from "./todo/reducer";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxSaga from "redux-saga";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { TodoActionTypes } from "./todo/types";
import { watchTodo } from "./todo/sagas";

export const initialState = {
  todoState,
};
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchTodo);
export type AppState = ReturnType<typeof rootReducer>;
