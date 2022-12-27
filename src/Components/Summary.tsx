import React from "react";
import { PlanSummary } from "./EmiPlanComponent/EmiPlanComponent";
import { Money } from "./Money";
import { FlexDiv } from "./StyledComponents";

interface SummaryProps {
  summery: PlanSummary;
}

const Summary = ({
  summery: { title, value, currency, period },
}: SummaryProps) => {
  return (
    <FlexDiv
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <span>{title}</span>
      {period && <span style={{ fontWeight: "bolder" }}>{period}</span>}
      {value && <Money amount={{ currency: currency || "", value: value }} />}
    </FlexDiv>
  );
};

export default Summary;
