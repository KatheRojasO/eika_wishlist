import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filter from "../Filter";

const mockedOnClick = jest.fn();

describe("Show/Hide bougth items testing", () => {
  it("should render a button that says Hide bought items", async () => {
    //arrange
    render(<Filter onClick={mockedOnClick} showAll={true} />);
    //act
    const buttonElement = screen.getByText(/bought items/i);
    //assert
    expect(buttonElement).toHaveTextContent("Hide bought items")
  });
  
  it("should render a button that says show bought items", async () => {
    //arrange
    render(<Filter onClick={mockedOnClick} showAll={false} />);
    //act
    const buttonElement = screen.getByText(/bought items/i);
    //assert
    expect(buttonElement).toHaveTextContent("Show bought items")
  });
});