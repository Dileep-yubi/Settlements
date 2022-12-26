import {
  addTodoAction,
  addTodoFailureAction,
  addTodoSuccessAction,
} from "../action";
import { initialState, todoState } from "../reducer";
import { payments } from "./testData";

describe("Auth reducer", () => {
  it("should handle ADD_TODO action", () => {
    expect(todoState(initialState, addTodoAction())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it("should handle AddTodoSuccess action", () => {
    expect(todoState(initialState, addTodoSuccessAction(payments))).toEqual({
      ...initialState,
      isLoading: false,
      payments: payments,
    });
  });

  it("should handle AddTodoFailure action", () => {
    expect(todoState(initialState, addTodoFailureAction())).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
