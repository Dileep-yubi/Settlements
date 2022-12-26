import {
  SettlementsActions,
  SettlementsActionTypes,
  SettlementsInitialState,
} from "./types";
import produce, { Draft } from "immer";
import { Reducer } from "redux";

export const initialState: SettlementsInitialState = {
  bankName: "SMARTBank",
  isLoading: false,
  payments: [],
};

export const todoState: Reducer<SettlementsInitialState, SettlementsActions> =
  produce(
    (
      draftState: Draft<SettlementsInitialState>,
      action: SettlementsActions
    ) => {
      console.log("todoState");
      switch (action.type) {
        case SettlementsActionTypes.GetPayments: {
          console.log("AddTodo reducer");
          draftState.isLoading = true;
          break;
        }

        case SettlementsActionTypes.GetPaymentsSuccess: {
          console.log("AddTodoSuccess reducer");
          draftState.isLoading = false;
          draftState.payments = action.payload.payments;
          break;
        }
        case SettlementsActionTypes.GetPaymentsFailure: {
          draftState.isLoading = false;
          break;
        }
      }
    },
    initialState
  );
