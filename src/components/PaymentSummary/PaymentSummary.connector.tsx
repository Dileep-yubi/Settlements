import { connect } from "react-redux";
import { AppState } from "../../store";
import { getPaymentsAction } from "../../store/settlements/action";
import { PaymentSummary } from "./PaymentSummary.component";
import { DispatchProps, OwnProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  bankName: todoState.bankName,
  isLoading: todoState.isLoading,
});

const mapDispatchToProps: DispatchProps = {
  getPaymentsAction,
};

export default connect<StateProps, DispatchProps, OwnProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PaymentSummary);
