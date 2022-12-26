import { watchTodo } from "../settlements/sagas";

export function* rootSaga(): Generator {
  yield watchTodo;
}
