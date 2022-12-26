import { render, screen } from "@testing-library/react";
import BreakDown from "./BreakDown.component";

describe("BreakDown", () => {
  const renderComponent = () =>
    render(
      <BreakDown
        summary={[
          { title: "EMI", value: "100", currency: "USD" },
          { title: "Interest", value: "1", currency: "USD" },
        ]}
      />
    );
  it("snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText("EMI")).toBeInTheDocument();
    expect(screen.getByText("USD 100")).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
