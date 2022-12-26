import { todoState } from "./settlements/reducer";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { watchSettlements } from "./settlements/sagas";

export const initialState = {
  todoState,
};
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchSettlements);
export type AppState = ReturnType<typeof rootReducer>;
