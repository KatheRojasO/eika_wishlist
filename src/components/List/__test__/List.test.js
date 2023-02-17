import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "../List";

const product1 = { product: "Bed", price: "100", checked: false };
const product2 = { product: "Nightstand", price: "150", checked: true };

const mockedList = [product1, product2];

const mockedOnChecked = jest.fn();

describe("List testing", () => {
  it("should render only the items not checked", async () => {
    //arrange
    render(
      <List showAll={false} list={mockedList} onChecked={mockedOnChecked} />
    );
    //act
    const item1 = screen.getByText("Bed, 100:-");
    const item2 = screen.queryByText("Nightstand, 150:-");
    //assert
    expect(item1).toBeInTheDocument();
    expect(item2).not.toBeInTheDocument();
  });

  it("should render all items if checked and not checked", async () => {
    //arrange
    render(
      <List showAll={true} list={mockedList} onChecked={mockedOnChecked} />
    );
    //act
    const item1 = screen.getByText("Bed, 100:-");
    const item2 = screen.getByText("Nightstand, 150:-");
    //assert
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});
