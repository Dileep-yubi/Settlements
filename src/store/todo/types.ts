export enum TodoActionTypes {
  AddTodo = "@@todo/ADD_TODO",
}

export type TodoInitialState = {
  todoList: string[];
  bankName: string;
};
export type AddTodoPayload = {
  todo: string;
};
export type AddTodoAction = {
  type: typeof TodoActionTypes.AddTodo;
  payload: AddTodoPayload;
};

export type TodoActions = AddTodoAction;
