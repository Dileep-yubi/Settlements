import { addTodoAction } from "../../store/todo/action";

export type StateProps = {
  todoList: string[];
};

export type DispatchProps = {
  addTodoAction: typeof addTodoAction;
};

export type TodoProps = StateProps & DispatchProps;
