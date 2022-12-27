import React from "react";
import { PlanSummary } from "./EmiPlanComponent/EmiPlanComponent";
import { Divider } from "./StyledComponents";
import Summary from "./Summary";

export interface BreakDownProps {
  summary: Array<PlanSummary>;
  divider?: boolean;
}

export const BreakDown = (props: BreakDownProps) => {
  return (
    <>
      {props.summary.map((summery: PlanSummary, i: number) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            <Summary summery={summery} />
            {props.divider && props.summary.length - 1 === i && <Divider />}
          </div>
        );
      })}
    </>
  );
};
