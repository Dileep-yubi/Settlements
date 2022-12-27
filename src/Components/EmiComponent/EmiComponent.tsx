import "./EMIComponent.css";
import { BreakDown } from "../BreakDown";
import { Divider } from "../StyledComponents";
import { EmiPlanHeader } from "./EmiPlanHeader";
import { Plan } from "components/EmiPlanComponent/EmiPlanComponent";

export interface EMIComponentProps {
  isSelected: boolean;
  element: Plan;
}

export const EMIComponent = (props: EMIComponentProps) => {
  const { isSelected, element } = props;
  return (
    <div className={`emiComponent ${isSelected ? "emiComponentSelected" : ""}`}>
      <div>
        <div style={{ padding: "6px" }}>
          <EmiPlanHeader isSelected={isSelected} title={element.header} />
        </div>
        {isSelected && (
          <>
            <Divider />
            <div style={{ padding: "6px" }}>
              <BreakDown summary={element.children} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
