import { useEffect, useState } from "react";
import { EmiHeader } from "../EmiHeader";
import { EMIPlanComponent } from "../EmiPlanComponent/EmiPlanComponent";
import { Money } from "../Money";
import "./EmiListComponent.css";

interface EmiListComponentProps {
  selectedEmi: number;
  handleSelected: (index: number) => void;
}

export const EmiListComponent = (props: EmiListComponentProps) => {
  const [selected, setSelected] = useState<number>(props.selectedEmi);

  useEffect(() => {
    if (selected) {
      props.handleSelected(selected);
    }
  }, [selected]);

  const value = (
    <span style={{ fontWeight: "bolder" }}>
      <Money amount={{ currency: "USD", value: 10000 }} />
    </span>
  );

  return (
    <div className="emiContentContainer">
      <EmiHeader title="Total outstanding amount" value={value} />
      <div className="flex-container">
        <EMIPlanComponent
          selected={selected}
          handleSelected={(index) => setSelected(index + 1)}
        />
      </div>
    </div>
  );
};
