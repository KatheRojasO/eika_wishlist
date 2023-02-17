import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sort from "../Sort";

describe("input testing", () => {
  it("should render name button", async () => {
    //arrange
    render(<Sort />);
    //act
    const buttonElement = screen.getByRole("button", {name: /Name/i});
    //assert
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render price button", async () => {
    //arrange
    render(<Sort />);
    //act
    const buttonElement = screen.getByRole("button", {name: /price/i});
    //assert
    expect(buttonElement).toBeInTheDocument();
  });
});
