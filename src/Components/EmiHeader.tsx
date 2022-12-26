import { Money } from "./Money";
import { H1 } from "./StyledComponents";
import Summary from "./Summary";

export interface EmiHeaderProps {
  title?: JSX.Element | string;
  value?: JSX.Element | string;
}

export const EmiHeader = (props: EmiHeaderProps) => {
  return (
    <>
      <H1>Choose EMI plan</H1>
      <div style={{ padding: "20px" }}>
        <Summary title={props.title} value={props.value} isRadio={false} />
      </div>
    </>
  );
};
