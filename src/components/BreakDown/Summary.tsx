import React from "react";
import styled from "styled-components";
import { Payment } from "./types";

export type FlexDivProps = {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
};
export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
  gap: 5px;
  line-height: 26px;
  padding: 15px;
`;

const Summary: React.FC<Payment> = ({
  title,
  value,
  currency,
}: Payment) => {
  return (
    <FlexDiv>
      <span>{title}</span>
      <span>{`${currency + " " || ""} ${value}`}</span>
    </FlexDiv>
  );
};

export default Summary;
