import React from "react";
import logo from "../../assets/logo.svg";

export default function Header({ title }) {
  return (
    <header>
      <div className="container">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="label-wrapper">{title}</h1>
      </div>
    </header>
  );
}
