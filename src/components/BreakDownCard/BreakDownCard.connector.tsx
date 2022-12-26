import { connect } from "react-redux";
import { AppState } from "../../store";
import { BreakDownCard } from "./BreakDownCard.component";
import { StateProps } from "./types";

const mapStateToProps = ({ todoState }: AppState): StateProps => ({
  payments: todoState.payments,
});

export default connect<StateProps, null, {}, any>(
  mapStateToProps,
  null
)(BreakDownCard);
