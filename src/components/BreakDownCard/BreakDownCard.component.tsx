import styled from "styled-components";
import BreakDown from "../BreakDown/BreakDown.component";
import { MoneyComponent } from "../BreakDown/MoneyComponent";
import "./BreakDownCard.css";
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d6d3d3;
`;

export const BreakDownCard = () => {
  const payment = [
    {
      title: "Tenure",
      value: "9 months",
    },
    {
      title: "EMI",
      value: <MoneyComponent amount={{ currency: "USD", value: 3339 }} />,
    },
    { title: "R.O.I", value: "1%" },
    {
      title: "Interest",
      value: <MoneyComponent amount={{ currency: "USD", value: 150 }} />,
    },
    {
      title: "Total amount payable",
      value: <MoneyComponent amount={{ currency: "USD", value: 10150 }} />,
    },
  ];
  return (
    <div className="emiComponent emiComponentSelected">
      <div style={{ padding: "15px 15px 0px 15px", gap: "3em" }}>
        <BreakDown summary={payment} />
      </div>
    </div>
  );
};
