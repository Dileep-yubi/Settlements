export interface EmiPlanElement {
  header: EmiElement;
  children: Array<EmiElement>;
}

export interface EmiElement {
  title?: JSX.Element | string;
  value?: JSX.Element | string;
}

export interface FlexDivProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
}
