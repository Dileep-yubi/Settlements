import { connect } from "react-redux";
import { AppState } from "../../store";
import { BreakDownCard } from "./BreakDownCard.component";
import { OwnProps, StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  payments: todoState.payments,
});

export default connect<StateProps, null, OwnProps, any>(
  mapStateToProps,
  null
)(BreakDownCard);
