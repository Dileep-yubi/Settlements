import { watchSettlements } from "../settlements/sagas";

export function* rootSaga(): Generator {
  yield watchSettlements;
}
