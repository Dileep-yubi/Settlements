import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { payments } from "../../store/settlements/__test__/testData";
import BreakDownCard from "./";
import reduxMockStore from "redux-mock-store";
import { headerComponent } from "testData";

describe("BreakDownCard", () => {
  const mockStore = reduxMockStore(),
    store = mockStore({
      todoState: { payments: payments },
    });
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BreakDownCard plan={payments} header={headerComponent[0].header} />
      </Provider>
    );
  it("snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText("EMI")).toBeInTheDocument();
    expect(screen.getByText("USD 1000")).toBeInTheDocument();
  });
});
