import { TodoProps } from "./types";

export const Todo: React.FC<TodoProps> = ({ todoList, addTodoAction }) => {
  console.log({ todoList, addTodoAction });
  const addTodoActionHandler = () => {
    addTodoAction("read");
  };
  return (
    <div className="App">
      <button onClick={addTodoActionHandler}>hello</button>
    </div>
  );
};
