import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    // remove the <> </> they don't do anything here
    // notice you don't use them on AddItemForm.jsx nor Filter.jsx
    <>
      <header>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="label-wrapper">EIKA's Shopping list</h1>
      </header>
    </>
  );
}

export default Header;
