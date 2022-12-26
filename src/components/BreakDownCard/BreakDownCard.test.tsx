import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { payments } from "../../store/settlements/__test__/testData";
import BreakDownCard from "./";
import reduxMockStore from "redux-mock-store";

describe("BreakDownCard", () => {
  const mockStore = reduxMockStore(),
    store = mockStore({
      todoState: { payments: payments },
    });
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BreakDownCard />{" "}
      </Provider>
    );
  it("snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText("EMI")).toBeInTheDocument();
    expect(screen.getByText("USD 1000")).toBeInTheDocument();
  });
});
