import styled from "styled-components";
import BreakDown from "../BreakDown/BreakDown.component";
import "./BreakDownCard.css";
import { BreakDownCardProps } from "./types";
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d6d3d3;
`;

export const BreakDownCard: React.FC<BreakDownCardProps> = ({ payments }) => {
  return (
    <div className="emiComponent emiComponentSelected">
      <div style={{ padding: "15px 15px 0px 15px", gap: "3em" }}>
        <BreakDown summary={payments} />
      </div>
    </div>
  );
};
