export type Payment = {
  title: string;
  value: string;
  currency?: string;
};
export type BreakDownProps = {
  summary: Array<Payment>;
};
