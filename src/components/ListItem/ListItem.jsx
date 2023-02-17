import React from "react";

export default function ListItem({ item, onChange }) {
  const { name, price, checked } = item;

  return (
    <div className="list-item-row">
      <div className="item-container">
        <input onChange={onChange} type="checkbox" checked={checked} />
        <span
          data-testid="item-info"
          className={`list-item-text ${checked ? "list-item-text-done" : ""}`}
        >
          {name + ", " + price + ":-"}
        </span>
      </div>
    </div>
  );
}
