import { Divider } from "./StyledComponents";
import { BreakDown } from "./BreakDown";
import "./EMIComponent.css";
import { EmiPlanElement } from "./types";

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
