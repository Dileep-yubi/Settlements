import { H1 } from "./StyledComponents";

export interface EmiHeaderProps {
  title?: string;
  currency: string;
  value: number;
}

export const EmiHeader = (props: EmiHeaderProps) => {
  return (
    <>
      <H1>Choose EMI plan</H1>
      <div style={{ padding: "20px" }}>
        {props.title} {props.value}
      </div>
    </>
  );
};
