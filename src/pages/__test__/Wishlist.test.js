import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WishList from "../WishList";

describe("Wishlist testing", () => {
  it("should render an item when is added", async () => {
    render(<WishList />);
    const form = screen.getByRole("form");
    fireEvent.submit(form, {
      target: {
        product: { value: "Table" },
        price: { value: "1200" },
      },
    });
    const itemAdded = screen.getByText("Table, 1200:-");
    const checkboxElement = screen.getByRole("checkbox");
    expect(itemAdded).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });

  it("should render multiple items added", async () => {
    render(<WishList />);
    const form = screen.getByRole("form");
    fireEvent.submit(form, {
      target: {
        product: { value: "Bed sheets" },
        price: { value: "2200" },
      },
    });
    const itemAdded1 = screen.getByText("Table, 1200:-");
    const itemAdded2 = screen.getByText("Bed sheets, 2200:-");
    expect(itemAdded1).toBeInTheDocument();
    expect(itemAdded2).toBeInTheDocument();
  });
});
