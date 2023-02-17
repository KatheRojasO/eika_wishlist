import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "../Header";

it("should render same text passed into title prop", async () =>{
    //arrange
    render (<Header title="header"/>);
    //act
    const headingElement = screen.getByText(/header/i);
    //assert
    expect(headingElement).toBeInTheDocument();
})

it("should render same text passed into title tag", async () =>{
    //arrange
    render (<Header title="header"/>);
    //act
    const headingElement = screen.getByRole("heading", {name: "header"});
    //assert
    expect(headingElement).toBeInTheDocument();
})