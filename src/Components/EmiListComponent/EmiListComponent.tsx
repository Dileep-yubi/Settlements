import { useEffect, useState } from "react";
import { EmiHeader } from "../EmiHeader";
import { EMIPlanComponent, Plan } from "../EmiPlanComponent/EmiPlanComponent";
import "./EmiListComponent.css";

interface EmiListComponentProps {
  selectedEmi: number;
  handleSelected: (index: number) => void;
  headerComponent: Array<Plan>;
}

export const EmiListComponent = ({
  selectedEmi,
  handleSelected,
  headerComponent,
}: EmiListComponentProps) => {
  const [selected, setSelected] = useState<number>(selectedEmi);

  useEffect(() => {
    if (selected) {
      handleSelected(selected);
    }
  }, [handleSelected, selected]);

  return (
    <div style={{ padding: "1rem" }}>
      <EmiHeader
        title="Total outstanding amount"
        currency="USD"
        value={10000}
      />
      <div className="flex-container">
        <EMIPlanComponent
          selected={selected}
          handleSelected={(index) => setSelected(index + 1)}
          headerComponent={headerComponent}
        />
      </div>
    </div>
  );
};
