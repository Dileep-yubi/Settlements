import { EmiPlanHeader } from "components/EmiComponent/EmiPlanHeader";
import styled from "styled-components";
import BreakDown from "../BreakDown/BreakDown.component";
import "./BreakDownCard.css";
import { BreakDownCardProps } from "./types";
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d6d3d3;
`;

export const BreakDownCard: React.FC<BreakDownCardProps> = ({
  payments,
  plan,
  header,
}) => {
  return (
    <div className="emiComponent emiComponentSelected">
      <div style={{ padding: "15px 15px 0px 15px", gap: "3em" }}>
        <EmiPlanHeader title={header} isSelected={false} />
        <BreakDown summary={plan} />
      </div>
    </div>
  );
};
