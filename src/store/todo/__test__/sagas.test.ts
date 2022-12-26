import { put, takeEvery } from "redux-saga/effects";
import { getPaymentsSuccessAction } from "../action";
import { handleFetch, watchSettlements } from "../sagas";
import { GetPaymentsAction, SettlementsActionTypes } from "../types";
import { payments } from "./testData";

describe("sagas", () => {
  it("should listen all the actions", () => {
    const gen = watchSettlements();
    expect(gen.next().value).toEqual(
      takeEvery(SettlementsActionTypes.GetPayments, handleFetch)
    );
  });

  it("should listen to GET_PAYMENTS", () => {
    const action: GetPaymentsAction = {
      type: SettlementsActionTypes.GetPayments,
    };
    const gen = handleFetch(action);
    expect(gen.next().value).toEqual(put(getPaymentsSuccessAction(payments)));
  });
});
