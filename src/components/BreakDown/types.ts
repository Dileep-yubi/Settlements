export type Payment = {
  title?: string;
  value?: number;
  currency?: string;
  period?: string;
  interest?: string;
};
export type BreakDownProps = {
  summary: Array<Payment>;
};
