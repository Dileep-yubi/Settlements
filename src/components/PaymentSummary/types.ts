import { getPaymentsAction } from "../../store/todo/action";

export type StateProps = {
  bankName: string;
  isLoading: boolean;
};

export type DispatchProps = {
  getPaymentsAction: typeof getPaymentsAction;
};

export type PaymentSummaryProps = StateProps & DispatchProps;
