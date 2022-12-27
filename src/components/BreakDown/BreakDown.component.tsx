import React from "react";
import { Divider } from "../BreakDownCard/BreakDownCard.component";
import Summary from "./Summary";
import { BreakDownProps, Payment } from "./types";

const BreakDown: React.FC<BreakDownProps> = (props: BreakDownProps) => {
  return (
    <>
      {props.summary.map((summary: Payment, i: any) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            {i !== 0 && <Divider data-testid="divider" />}
            <Summary summary={summary} />
          </div>
        );
      })}
    </>
  );
};

export default BreakDown;
