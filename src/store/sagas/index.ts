import { watchTodo } from "../todo/sagas";

export function* rootSaga(): Generator {
  yield watchTodo;
}
