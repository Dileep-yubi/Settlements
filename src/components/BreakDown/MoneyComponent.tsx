import React from "react";

type Amount = {
  currency: string;
  value: number;
};
export type MoneyComponentProps = {
  amount: Amount;
};
export const MoneyComponent: React.FC<MoneyComponentProps> = ({
  amount,
}: MoneyComponentProps) => {
  if (!amount.currency || amount.value == null) {
    return <></>;
  }
  return (
    <>
      {amount.currency} {amount.value}
    </>
  );
};
