import { EmiHeader } from "components/EmiHeader";
import {
  EMIPlanComponent,
  Plan,
} from "components/EmiPlanComponent/EmiPlanComponent";
import { useEffect, useState } from "react";
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
