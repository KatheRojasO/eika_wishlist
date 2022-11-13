import React from "react";

export default function Sort({ sortByName, sortByPrice }) {
  return (
    <div className="sort-container">
      <span className="sort-label">Sort by: </span>
      <button className="sort-button" onClick={() => sortByName()}>
        Name
      </button>
      <button className="sort-button" onClick={() => sortByPrice()}>
        Price
      </button>
    </div>
  );
}
