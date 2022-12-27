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
  gap: 5px;
  line-height: 26px;
  padding: 15px;
  color: black;
`;

const Summary: React.FC<{ summary: Payment }> = ({
  summary: { title, value, currency, interest, period },
}) => {
  return (
    <FlexDiv style={{ display: "flex", justifyContent: "space-between" }}>
      {title && <span>{title}</span>}
      {interest && <span>{interest}</span>}
      {period && <span>{period}</span>}
      {value && <span>{`${currency || ""} ${value}`}</span>}
    </FlexDiv>
  );
};

export default Summary;
