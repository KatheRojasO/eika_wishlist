import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListItem from "../ListItem";

const mockedCheckedItem = {name: 'bed', price: '100', checked: true, onChange: () => {}};
const mockedUncheckedItem = {name: 'bed', price: '100', checked: false, onChange: () => {}};
const mockedOnChange = () => {};

describe("ListItem testing", () => {
  it("should render pending item", async () => {
    render(<ListItem item={mockedUncheckedItem} onChange={mockedOnChange} />);
    const spanElement = screen.getByTestId("item-info");
    const checkboxElement = screen.getByRole("checkbox");
    expect(spanElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });

  it("should show a checked checkbox", async () => {
    render(<ListItem item={mockedCheckedItem} onChange={mockedOnChange} />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeChecked();
  });

  it("should show an unchecked checkbox", async () => {
    render(<ListItem item={mockedUncheckedItem} onChange={mockedOnChange} />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
  });
});