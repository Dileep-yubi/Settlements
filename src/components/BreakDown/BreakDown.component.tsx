import React from "react";
import { Divider } from "../BreakDownCard/BreakDownCard.component";
import Summary from "./Summary";
import { BreakDownProps } from "./types";

const BreakDown: React.FC<BreakDownProps> = (props: BreakDownProps) => {
  return (
    <>
      {props.summary.map((e: any, i: any) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            {i !== 0 && <Divider data-testid="divider" />}
            <Summary title={e.title} value={e.value} currency={e.currency} />
          </div>
        );
      })}
    </>
  );
};

export default BreakDown;
