import { Payment } from "../../components/BreakDown/types";
import {
  GetPaymentsAction,
  GetPaymentsFailureAction,
  GetPaymentsSuccessAction,
  SettlementsActionTypes,
} from "./types";

export const getPaymentsAction = (): GetPaymentsAction => {
  return {
    type: SettlementsActionTypes.GetPayments,
  };
};

export const getPaymentsSuccessAction = (
  payments: Array<Payment>
): GetPaymentsSuccessAction => {
  return {
    type: SettlementsActionTypes.GetPaymentsSuccess,
    payload: { payments },
  };
};

export const getPaymentsFailureAction = (): GetPaymentsFailureAction => {
  return {
    type: SettlementsActionTypes.GetPaymentsFailure,
  };
};
