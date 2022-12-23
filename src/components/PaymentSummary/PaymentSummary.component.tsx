import { useEffect } from "react";
import { BreakDownCard } from "../BreakDownCard/BreakDownCard.component";
import {
  BackButton,
  BankTitle,
  Card,
  Container,
  EMITitle,
  PaymentDetailCard,
  ReviewTitle,
  Revised,
  SubmitButton,
  Title,
  TitleContainer,
} from "./PaymentSummary.styled";
import { PaymentSummaryProps } from "./types";

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  todoList,
  addTodoAction,
  bankName,
}) => {
  const credit = {
    width: "80%",
  };
  console.log(todoList);
  useEffect(() => {
    addTodoAction("read");
  }, [addTodoAction]);

  const x = [{}];
  return (
    <Container>
      <TitleContainer>
        <BankTitle>{bankName}</BankTitle>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <img style={credit} src="/credit.jpeg" alt="credit" />
          </div>
          <div
            style={{ width: "50%", display: "flex", alignItems: "flex-start" }}
          >
            <EMITitle>
              convert your outstanding amount into EMIs with ease!
            </EMITitle>
          </div>
        </div>
      </TitleContainer>

      <PaymentDetailCard>
        <Title>Summary</Title>
        <ReviewTitle> Please review the selection made</ReviewTitle>

        <BreakDownCard />
        <Revised> View the revised EMI payment plan letter</Revised>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BackButton> Back</BackButton>
          <SubmitButton> Submit</SubmitButton>
        </div>
      </PaymentDetailCard>
    </Container>
  );
};
