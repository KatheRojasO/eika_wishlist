import React from "react";
import "./ListItem.css";

export default function ListItem({ item }) {
  const { name, price, checked, onChange } = item;

  return (
    <div className="list-item-row">
      <input onChange={() => onChange()} type="checkbox" checked={checked} />
      <span
        data-testid="item-info"
        className={`list-item-text ${checked ? "list-item-text-done" : ""}`}
      >
        {name + ", " + price + ":-"}
      </span>
    </div>
  );
}
