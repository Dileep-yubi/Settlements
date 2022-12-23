import { connect } from "react-redux";
import { AppState } from "../../store";
import { addTodoAction } from "../../store/todo/action";
import { Todo } from "./Todo.component";
import { DispatchProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  todoList: todoState.todoList,
});

const mapDispatchToProps: DispatchProps = {
  addTodoAction,
};
export default connect<StateProps, DispatchProps, unknown, any>(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
