import React from "react";

export default function ListItem({ item, onChange }) {
  const { product, price, checked } = item;

  return (
    <div className="list-item-row">
      <div className="item-container">
        <input onChange={onChange} type="checkbox" checked={checked} />
        <span
          data-testid="item-info"
          className={`list-item-text ${checked ? "list-item-text-done" : ""}`}
        >
          {product + ", " + price + ":-"}
        </span>
      </div>
    </div>
  );
}
