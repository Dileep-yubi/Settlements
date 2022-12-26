import React from "react";
import { FormattedNumber } from "react-intl";

interface MoneyProps {
  amount: {
    currency: string;
    value: number;
  };
}

export const Money = ({ amount }: MoneyProps) => {
  if (!amount.currency || amount.value == null) {
    return <></>;
  }
  return (
    <>
      {amount.currency} {"  "}
      <FormattedNumber value={amount.value} />
    </>
  );
};
