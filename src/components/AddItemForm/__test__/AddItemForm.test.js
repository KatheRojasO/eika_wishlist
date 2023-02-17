import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddItemForm from "../AddItemForm";

const mockedAddItem = jest.fn();

describe("input testing", () => {
  it("should render name input element", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/name/i);
    //assert
    expect(inputElement).toBeInTheDocument();
  });

  it("should render price input element", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/price/i);
    //assert
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in name input", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/name/i);
    fireEvent.change(inputElement, { target: { value: "Bed" } });
    //assert
    expect(inputElement.value).toBe("Bed");
  });

  it("should be able to type in price input", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "123" } });
    //assert
    expect(inputElement.value).toBe("123");
  });

  it("should have empty inputs when add button is clicked", async () => {
    //arrange
    render(<AddItemForm addItem={mockedAddItem} />);
    //act
    const form = screen.getByRole("form");
    const nameInputElement = screen.getByPlaceholderText(/name/i);
    const priceInputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(nameInputElement, { target: { value: "Bed" } });
    fireEvent.change(priceInputElement, { target: { value: "123" } });
    fireEvent.submit(form, {
      target: {
        product: { value: "Bed" },
        price: { value: "123" },
      },
    });
    //assert
    expect(nameInputElement.value).toBe("");
    expect(priceInputElement.value).toBe("");
  });

  it("should show a required field warning when the name input field is empty", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/name/i);
    fireEvent.change(inputElement, { target: { value: "" } });
    //assert
    expect(inputElement).toBeInvalid();
  });

  it("should show a required field warning when the price input field is empty", async () => {
    //arrange
    render(<AddItemForm />);
    //aact
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "" } });
    //assert
    expect(inputElement).toBeInvalid();
  });

  it("should show a required field warning when the price input field is lower than zero", async () => {
    //arrange
    render(<AddItemForm />);
    //act
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "-1" } });
    //assert
    expect(inputElement).toBeInvalid();
  });
});
