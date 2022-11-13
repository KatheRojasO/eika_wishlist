import React from "react";

export default function ListItem({ name, price, checked, onChange }) {
  return (
    <div className="list-item-row">
      <input onChange={() => onChange()} type="checkbox" checked={checked} />
      <span
        className={`list-item-text ${checked ? "list-item-text-done" : ""}`}
      >
        {name + ", " + price}
      </span>
    </div>
  );
}
