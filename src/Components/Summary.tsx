import React from "react";
import { FlexDiv } from "./StyledComponents";

interface SummaryProps {
  isRadio: boolean;
  title?: JSX.Element | string;
  value?: JSX.Element | string;
}

const Summary = (props: SummaryProps) => {
  return (
    <FlexDiv
      flexDirection="row"
      justifyContent={`${props.isRadio ? "space-between" : "center"}`}
      alignItems="center">
      <span>{props.title}</span>
      <span>{props.value}</span>
    </FlexDiv>
  );
};

export default Summary;
