import React from "react";
import { Divider } from "./StyledComponents";
import Summary from "./Summary";

export interface BreakDownProps {
  summary: any;
  isRadio: boolean;
  divider?: boolean;
}

export const BreakDown = (props: BreakDownProps) => {
  return (
    <>
      {props.summary.map((e: any, i: number) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            <Summary isRadio={props.isRadio} title={e.title} value={e.value} />
            {props.divider && props.summary.length - 1 === i && <Divider />}
          </div>
        );
      })}
    </>
  );
};
