import { Plan } from "components/EmiPlanComponent/EmiPlanComponent";

export const headerComponent: Array<Plan> = [
  {
    header: {
      currency: "USD",
      value: 3339,
      period: "3 months",
      interest: "1%",
    },
    children: [
      {
        title: "Tenure",
        period: "4 months",
      },
      {
        title: "Interest",
        value: 25,
        currency: "USD",
      },
      {
        title: "Total amount payable",
        value: 435,
        currency: "USD",
      },
    ],
  },
  {
    header: {
      currency: "USD",
      value: 1839,
      period: "6 months",
      interest: "1.5%",
    },
    children: [
      {
        title: "Tenure",
        period: "6 months",
      },
      {
        title: "Interest",
        currency: "USD",
        value: 75,
      },
      {
        title: "Total amount payable",
        value: 10075,
        currency: "USD",
      },
    ],
  },
  {
    header: {
      currency: "USD",
      value: 1277,
      period: "9 months",
      interest: "2%",
    },
    children: [
      {
        title: "Tenure",
        period: "9 months",
      },
      {
        title: "Interest",
        value: 150,
        currency: "USD",
      },
      {
        title: "Total amount payable",
        value: 10150,
        currency: "USD",
      },
    ],
  },
];
