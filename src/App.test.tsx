import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import reduxMockStore from "redux-mock-store";
import { payments } from "store/settlements/__test__/testData";
import { Provider } from "react-redux";
import StyleProvider from "@yubi/yb-style-provider";
import { IntlProvider } from "react-intl";

describe("<App/>", () => {
  const mockStore = reduxMockStore(),
    store = mockStore({
      todoState: { payments: payments },
    });
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <StyleProvider baseUrl={""}>
          <IntlProvider locale="en">
            <App />
          </IntlProvider>
        </StyleProvider>
      </Provider>
    );
  it("should match the snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    const displayTexts = [
      "SMARTBank",
      "Convert your outstanding amount into EMIs with ease!",
      "Choose EMI plan",
      "Total outstanding amount 10000",
    ];
    displayTexts.forEach((test) => {
      expect(screen.getByText(test)).toBeInTheDocument();
    });
  });

  it("should disable 'not now' and 'submit' button initially", () => {
    renderComponent();
    const submit = screen.getByRole("button", { name: "Submit" });
    expect(submit).toBeInTheDocument();
    expect(submit).toBeDisabled();
    const notNow = screen.getByRole("button", { name: "Not Now" });
    expect(notNow).toBeInTheDocument();
    expect(notNow).toBeDisabled();
  });

  it("should enable Submit button when a Emi plan is selected", () => {
    renderComponent();
    const emiPlanHeader = screen.getByText("USD 3339 for 3 months @1% p.a");
    expect(emiPlanHeader).toBeInTheDocument();
    fireEvent.click(emiPlanHeader);
    expect(emiPlanHeader).toBeInTheDocument();
    const emiPlanSummary = [
      "Tenure",
      "4 months",
      "Interest",
      "USD 25",
      "Total amount payable",
      "USD 435",
    ];
    emiPlanSummary.forEach((test) => {
      expect(screen.getByText(test)).toBeInTheDocument();
    });

    const input = screen.getByRole("radio");
    expect(input).toBeChecked();

    const submit = screen.getByRole("button", { name: "Submit" });
    expect(submit).toBeInTheDocument();
    expect(submit).toBeEnabled();
    const notNow = screen.getByRole("button", { name: "Not Now" });
    expect(notNow).toBeInTheDocument();
    expect(notNow).toBeDisabled();
  });

  it("should navigate to the EMI plan summary page when click on 'Submit' button", () => {
    renderComponent();
    const emiPlanHeader = screen.getByText("USD 3339 for 3 months @1% p.a");
    expect(emiPlanHeader).toBeInTheDocument();
    fireEvent.click(emiPlanHeader);

    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submit);

    const displayTexts = [
      "Summary",
      "Please review the selection made",
      "USD 3339 for 3 months @1% p.a",
      "View the revised EMI payment plan letter",
      "Convert your outstanding amount into EMIs with ease!",
      "Tenure",
      "4 months",
      "Interest",
      "USD 25",
      "Total amount payable",
      "USD 435",
    ];

    displayTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(submit).toBeInTheDocument();
    expect(submit).toBeEnabled();
    const back = screen.getByRole("button", { name: "Back" });
    expect(back).toBeInTheDocument();
    expect(back).toBeEnabled();
  });

  it("should navigate to the EMI plan Selection page when click on 'Back' button", () => {
    renderComponent();
    const emiPlanHeader = screen.getByText("USD 3339 for 3 months @1% p.a");
    expect(emiPlanHeader).toBeInTheDocument();
    fireEvent.click(emiPlanHeader);

    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submit);

    const back = screen.getByRole("button", { name: "Back" });
    fireEvent.click(back);

    expect(submit).toBeInTheDocument();
    expect(submit).toBeEnabled();
    const notNow = screen.getByRole("button", { name: "Not Now" });
    expect(notNow).toBeInTheDocument();
    expect(notNow).toBeDisabled();
    const EmiPlanHeader2 = screen.getByText("USD 3339 for 3 months @1% p.a");
    expect(EmiPlanHeader2).toBeInTheDocument();
    const emiPlanSummary = [
      "Tenure",
      "4 months",
      "Interest",
      "USD 25",
      "Total amount payable",
      "USD 435",
    ];
    emiPlanSummary.forEach((test) => {
      expect(screen.getByText(test)).toBeInTheDocument();
    });
  });
});
