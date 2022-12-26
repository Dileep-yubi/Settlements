import { Payment } from "../../components/BreakDown/types";

export enum SettlementsActionTypes {
  GetPayments = "@@settlements/GET_PAYMENTS",
  GetPaymentsSuccess = "@@settlements/GET_PAYMENTS_SUCCESS",
  GetPaymentsFailure = "@@settlements/GET_PAYMENTS_FAILURE",
}

export type SettlementsInitialState = {
  bankName: string;
  isLoading: boolean;
  payments: Array<Payment>;
};
export type GetPaymentsAction = {
  type: typeof SettlementsActionTypes.GetPayments;
};

export type GetPaymentsSuccessAction = {
  type: typeof SettlementsActionTypes.GetPaymentsSuccess;
  payload: { payments: Array<Payment> };
};

export type GetPaymentsFailureAction = {
  type: typeof SettlementsActionTypes.GetPaymentsFailure;
};
export type SettlementsActions =
  | GetPaymentsAction
  | GetPaymentsSuccessAction
  | GetPaymentsFailureAction;
