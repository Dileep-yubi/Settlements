import { useEffect, useState } from "react";
import BreakDownCard from "../BreakDownCard";
import { Spin } from "antd";
import CAButton from "@yubi/yb-core-button";
import { useStyles } from "@yubi/yb-style-provider";

import {
  BankTitle,
  Container,
  EMITitle,
  PaymentDetailCard,
  ReviewTitle,
  Revised,
  Title,
  TitleContainer,
} from "./PaymentSummary.styled";
import { PaymentSummaryProps } from "./types";
import { Modal } from "antd";
import { CONVERT_OUTSTANDING, REVISED_EMI } from "../constants/displayMessages";

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  addTodoAction,
  bankName,
  isLoading,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const credit = {
    width: "80%",
  };
  const { styleConnector } = useStyles();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    addTodoAction();
  }, [addTodoAction]);

  if (isLoading) {
    return <Spin />;
  }

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
            <EMITitle>{CONVERT_OUTSTANDING}</EMITitle>
          </div>
        </div>
      </TitleContainer>

      <PaymentDetailCard>
        <Title>Summary</Title>
        <ReviewTitle> Please review the selection made</ReviewTitle>

        <BreakDownCard />
        <Revised onClick={toggleModal}>{REVISED_EMI}</Revised>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CAButton
            title="Back"
            size={"s"}
            type={"success"}
            styleConnector={styleConnector}
            width="35%"
            onClick={toggleModal}
          />
          <CAButton
            title="Submit"
            size={"s"}
            type={"success"}
            styleConnector={styleConnector}
            width="35%"
            onClick={toggleModal}
          />
        </div>
      </PaymentDetailCard>
      <Modal
        title={bankName}
        open={isModalOpen}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        <Title>Balance to API application</Title>

        <PaymentDetailCard>
          <Title>Summary</Title>
          <ReviewTitle> Please review the selection made</ReviewTitle>

          <BreakDownCard />

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
        </PaymentDetailCard>
      </Modal>
    </Container>
  );
};
