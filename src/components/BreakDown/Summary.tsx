import React from "react";
import styled from "styled-components";
export type FlexDivProps = {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
};
export const FlexDiv = styled.div<FlexDivProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props: any) => props.flexDirection || "row"};
  justify-content: ${(props: any) => props.justifyContent || "space-between"};
  align-items: ${(props: any) => props.alignItems || "center"};
  gap: 5px;
  line-height: 26px;
  padding: 15px;
`;

export type SummaryProps = {
  title: string;
  value: string;
};
const Summary: React.FC<SummaryProps> = ({ title, value }: SummaryProps) => {
  console.log({ title, value });
  return (
    <FlexDiv
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <span>{title}</span>
      <span>{value}</span>
    </FlexDiv>
  );
};

export default Summary;
