import { connect } from "react-redux";
import { AppState } from "../../store";
import { addTodoAction } from "../../store/todo/action";
import { PaymentSummary } from "./PaymentSummary.component";
import { DispatchProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  todoList: todoState.todoList,
  bankName: todoState.bankName,
});

const mapDispatchToProps: DispatchProps = {
  addTodoAction,
};
export default connect<StateProps, DispatchProps, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(PaymentSummary);
