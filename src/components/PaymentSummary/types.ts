import { getPaymentsAction } from "../../store/settlements/action";

export type StateProps = {
  bankName: string;
  isLoading: boolean;
};

export type DispatchProps = {
  getPaymentsAction: typeof getPaymentsAction;
};

export type PaymentSummaryProps = StateProps & DispatchProps;
