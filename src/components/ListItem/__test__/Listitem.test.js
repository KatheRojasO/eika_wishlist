import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListItem from "../ListItem";

const mockedCheckedItem = {name: 'bed', price: '100', checked: true, onChange: () => {}};
const mockedUncheckedItem = {name: 'bed', price: '100', checked: false, onChange: () => {}};
const mockedOnChange = () => {};

describe("ListItem testing", () => {
  it("should render pending item", async () => {
    //arrange
    render(<ListItem item={mockedUncheckedItem} onChange={mockedOnChange} />);
    //act
    const spanElement = screen.getByTestId("item-info");
    const checkboxElement = screen.getByRole("checkbox");
    //assert
    expect(spanElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });

  it("should show a checked checkbox", async () => {
    //arrange
    render(<ListItem item={mockedCheckedItem} onChange={mockedOnChange} />);
    //act
    const checkboxElement = screen.getByRole("checkbox");
    //assert
    expect(checkboxElement).toBeChecked();
  });

  it("should show an unchecked checkbox", async () => {
    //arrange
    render(<ListItem item={mockedUncheckedItem} onChange={mockedOnChange} />);
    //act
    const checkboxElement = screen.getByRole("checkbox");
    //assert
    expect(checkboxElement).not.toBeChecked();
  });
});