import { addTodoAction } from "../../store/todo/action";

export type StateProps = {
  bankName: string;
  isLoading: boolean;
};

export type DispatchProps = {
  addTodoAction: typeof addTodoAction;
};

export type PaymentSummaryProps = StateProps & DispatchProps;
