import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filter from "../Filter";

const mockedOnClick = jest.fn();

describe("Show/Hide bougth items testing", () => {
  it("should show all items", async () => {
    render(<Filter onClick={mockedOnClick} showAll={true} />);
    const buttonElement = screen.getByText(/bought items/i);
    expect(buttonElement).toHaveTextContent("Hide bought items")
  });
  
  it("should hide bought items", async () => {
    render(<Filter onClick={mockedOnClick} showAll={false} />);
    const buttonElement = screen.getByText(/bought items/i);
    expect(buttonElement).toHaveTextContent("Show bought items")
  });
});