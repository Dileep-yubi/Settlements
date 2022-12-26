import { connect } from "react-redux";
import { AppState } from "../../store";
import { getPaymentsAction } from "../../store/todo/action";
import { PaymentSummary } from "./PaymentSummary.component";
import { DispatchProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  bankName: todoState.bankName,
  isLoading: todoState.isLoading,
});

const mapDispatchToProps: DispatchProps = {
  getPaymentsAction,
};
export default connect<StateProps, DispatchProps, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(PaymentSummary);
