import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <header>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="label-wrapper">Shopping list</h1>
      </header>
    </>
  );
}

export default Header;
