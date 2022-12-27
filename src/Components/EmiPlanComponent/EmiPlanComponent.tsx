import "./EmiPlanComponent.css";
import { EMIComponent } from "../EmiComponent/EmiComponent";

interface EMIPlanComponentProps {
  selected: number;
  handleSelected: (index: number) => void;
  headerComponent: Array<Plan>;
}

export type Header = {
  currency: string;
  value: number;
  period: string;
  interest: string;
};

export type PlanSummary = {
  currency?: string;
  value?: number;
  title: string;
  period?: string;
};

export type Plan = {
  header: Header;
  children: Array<PlanSummary>;
};

export const EMIPlanComponent = ({
  headerComponent,
  selected,
  handleSelected,
}: EMIPlanComponentProps) => {
  return (
    <>
      {headerComponent.map((e, index) => {
        const isSelected = selected === index + 1;

        return (
          <div
            key={index}
            className="emiPlanWrapper"
            onClick={() => handleSelected(index)}
          >
            <EMIComponent isSelected={isSelected} element={e} />
          </div>
        );
      })}
    </>
  );
};
