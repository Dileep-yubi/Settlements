import "./EmiPlanComponent.css";
import { EMIComponent } from "../EmiComponent/EmiComponent";
import { Money } from "../Money";

interface EMIPlanComponentProps {
  selected: number;
  handleSelected: (index: number) => void;
}

export const EMIPlanComponent = (props: EMIPlanComponentProps) => {
  const headerComponent = [
    {
      header: {
        title: (
          <span>
            <Money amount={{ currency: "USD", value: 3339 }} /> for 3 months @1%
            p.a
          </span>
        ),
        value: (
          <input
            onChange={() => {}}
            checked={props.selected === 1}
            type="radio"
            name="emi"
          />
        ),
      },
      children: [
        {
          title: "Tenure",
          value: "3 months",
        },
        {
          title: "Interest",
          value: <Money amount={{ currency: "USD", value: 25 }} />,
        },
        {
          title: "Total amount payable",
          value: <Money amount={{ currency: "USD", value: 10025 }} />,
        },
      ],
    },
    {
      header: {
        title: (
          <span>
            <Money amount={{ currency: "USD", value: 1839 }} /> for 6 months
            @1.5% p.a
          </span>
        ),
        value: (
          <input
            onChange={() => {}}
            checked={props.selected === 2}
            type="radio"
            name="emi"
          />
        ),
      },
      children: [
        {
          title: "Tenure",
          value: "6 months",
        },
        {
          title: "Interest",
          value: <Money amount={{ currency: "USD", value: 75 }} />,
        },
        {
          title: "Total amount payable",
          value: <Money amount={{ currency: "USD", value: 10075 }} />,
        },
      ],
    },
    {
      header: {
        title: (
          <span>
            <Money amount={{ currency: "USD", value: 1277 }} /> for 9 months @2%
            p.a
          </span>
        ),
        value: (
          <input
            onChange={() => {}}
            checked={props.selected === 3}
            type="radio"
            name="emi"
          />
        ),
      },
      children: [
        {
          title: "Tenure",
          value: "9 months",
        },
        {
          title: "Interest",
          value: <Money amount={{ currency: "USD", value: 150 }} />,
        },
        {
          title: "Total amount payable",
          value: <Money amount={{ currency: "USD", value: 10150 }} />,
        },
      ],
    },
  ];

  return (
    <>
      {headerComponent.map((e, index) => {
        const isSelected = props.selected === index + 1;
        return (
          <div
            key={index}
            className="emiPlanWrapper"
            onChange={() => props.handleSelected(index)}>
            <EMIComponent isRadio={true} isSelected={isSelected} element={e} />
          </div>
        );
      })}
    </>
  );
};
