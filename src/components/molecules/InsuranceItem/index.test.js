import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InsuranceItem from ".";
import data from "./mocks/data";

describe("Show Insurances item", () => {
  test("snapshot", () => {
    const container = render(<InsuranceItem item={data} />);
    expect(container).toMatchSnapshot();
  });

  test("Check if click add shadow", async () => {
    const { getAllByTestId } = render(<InsuranceItem item={data} />);
    const itemClicked = getAllByTestId("item-click");
    await userEvent.click(itemClicked[0]);
    await waitFor(() => {
      expect(itemClicked[0].classList.contains("active")).toBe(true);
    });
  });

  test("Check if click change arrow", async () => {
    const { getAllByTestId } = render(<InsuranceItem item={data} />);
    const itemClicked = getAllByTestId("item-click");
    const arrow = getAllByTestId("arrow");
    await userEvent.click(itemClicked[0]);
    await waitFor(() => {
      expect(arrow[0].classList.contains("cardIconActive")).toBe(true);
    });
  });
});
