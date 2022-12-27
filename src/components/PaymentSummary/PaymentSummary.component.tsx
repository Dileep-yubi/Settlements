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
import {
  CONVERT_OUTSTANDING,
  EMI_BALANCE_APPLICATION,
  REVISED_EMI,
} from "../constants/displayMessages";

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  getPaymentsAction,
  bankName,
  isLoading,
  plan,
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
    getPaymentsAction();
  }, [getPaymentsAction]);

  if (isLoading) {
    return <Spin />;
  }

  console.log({ plan });
  return (
    <Container>
      <Title>Summary</Title>
      <ReviewTitle> Please review the selection made</ReviewTitle>

      <BreakDownCard
        header={plan.header}
        plan={[
          ...plan.children,
          { title: "R.I", interest: plan.header.interest },
          {
            title: "EMI",
            value: plan.header.value,
            currency: plan.header.currency,
          },
        ]}
      />
      <Revised onClick={toggleModal}>{REVISED_EMI}</Revised>

      <Modal
        title={bankName}
        open={isModalOpen}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        <Title>{EMI_BALANCE_APPLICATION}</Title>
      </Modal>
    </Container>
  );
};
