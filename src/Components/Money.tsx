import React from "react";
import { FormattedNumber } from "react-intl";

interface MoneyProps {
  amount: {
    currency: string;
    value?: number;
  };
}

export const Money = ({ amount: { currency, value } }: MoneyProps) => {
  return (
    <span style={{ fontWeight: "bolder" }}>
      {currency} {value && <FormattedNumber value={value} />}
    </span>
  );
};
