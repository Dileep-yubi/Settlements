import { Header } from "components/EmiPlanComponent/EmiPlanComponent";
import { Payment } from "../BreakDown/types";

export type StateProps = {
  payments: Array<Payment>;
};

export type OwnProps = {
  plan: Array<Payment>;
  header: Header;
};

export type BreakDownCardProps = StateProps & OwnProps;
