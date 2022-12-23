import React from "react";
import { Divider } from "../BreakDownCard/BreakDownCard.component";
import Summary from "./Summary";

const BreakDown: React.FC<any> = (props: any) => {
  return (
    <>
      {props.summary.map((e: any, i: any) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            {i !== 0 && <Divider />}
            <Summary title={e.title} value={e.value} />
          </div>
        );
      })}
    </>
  );
};

export default BreakDown;
