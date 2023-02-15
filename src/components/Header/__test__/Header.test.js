import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "../Header";

it("should render same text passed into title prop", async () =>{
    render (<Header title="header"/>);
    const headingElement = screen.getByText(/header/i);
    expect(headingElement).toBeInTheDocument();
})

it("should render same text passed into title tag", async () =>{
    render (<Header title="header"/>);
    const headingElement = screen.getByRole("heading", {name: "header"});
    expect(headingElement).toBeInTheDocument();
})