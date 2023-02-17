import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddItemForm from "../AddItemForm";

const mockedAddItem = jest.fn();

describe("input testing", () => {
  it("should render name input element", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/name/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render price input element", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/price/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in name input", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/name/i);
    fireEvent.change(inputElement, { target: { value: "Bed" } });
    expect(inputElement.value).toBe("Bed");
  });

  it("should be able to type in price input", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "123" } });
    expect(inputElement.value).toBe("123");
  });

  it("should have empty inputs when add button is clicked", async () => {
    render(<AddItemForm addItem={mockedAddItem} />);
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
    expect(nameInputElement.value).toBe("");
    expect(priceInputElement.value).toBe("");
  });

  it("should show a required field warning when the name input field is empty", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/name/i);
    fireEvent.change(inputElement, { target: { value: "" } });
    expect(inputElement).toBeInvalid();
  });

  it("should show a required field warning when the price input field is empty", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "" } });
    expect(inputElement).toBeInvalid();
  });

  it("should show a required field warning when the price input field is lower than zero", async () => {
    render(<AddItemForm />);
    const inputElement = screen.getByPlaceholderText(/price/i);
    fireEvent.change(inputElement, { target: { value: "-1" } });
    expect(inputElement).toBeInvalid();
  });
});
