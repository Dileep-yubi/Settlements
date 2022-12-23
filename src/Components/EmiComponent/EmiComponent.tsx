import "./EMIComponent.css";
import { EmiPlanElement } from "../types";
import { BreakDown } from "../BreakDown";
import { Divider } from "../StyledComponents";

export interface EMIComponentProps {
  isSelected?: boolean;
  isRadio: boolean;
  element: EmiPlanElement;
}

export const EMIComponent = (props: EMIComponentProps) => {
  const { isSelected, element } = props;
  return (
    <div className={`emiComponent ${isSelected ? "emiComponentSelected" : ""}`}>
      <div>
        <div style={{ padding: "6px" }}>
          <BreakDown
            isRadio={props.isRadio || false}
            summary={[element.header]}
          />
        </div>
        {isSelected && (
          <>
            {" "}
            <Divider />
            <div style={{ padding: "6px" }}>
              <BreakDown
                isRadio={props.isRadio || false}
                summary={element.children}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
