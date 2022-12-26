import { put, takeEvery } from "redux-saga/effects";
import { Payment } from "../../components/BreakDown/types";
import { getPaymentsFailureAction, getPaymentsSuccessAction } from "./action";
import { GetPaymentsAction, SettlementsActionTypes } from "./types";

import { payments } from "./__test__/testData";

export function* handleFetch(action: GetPaymentsAction) {
  const response: Array<Payment> = payments;
  if (response) {
    yield put(getPaymentsSuccessAction(response));
  } else {
    yield put(getPaymentsFailureAction());
  }
}

export function* watchSettlements() {
  yield takeEvery(SettlementsActionTypes.GetPayments, handleFetch);
}
