import { connect } from "react-redux";
import { AppState } from "../../store";
import { addTodoAction } from "../../store/todo/action";
import { PaymentSummary } from "./PaymentSummary.component";
import { DispatchProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  bankName: todoState.bankName,
  isLoading: todoState.isLoading,
});

const mapDispatchToProps: DispatchProps = {
  addTodoAction,
};
export default connect<StateProps, DispatchProps, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(PaymentSummary);
