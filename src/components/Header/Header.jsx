import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

 export default function Header({ title }) {
  return (
    <header>
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="label-wrapper">{title}</h1>
    </header>
  );
}
