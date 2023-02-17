import React from "react";

export default function Filter({ onClick, showAll }) {
  return (
    <div className="filter-container">
      <div className="container">
        <button className="filter-button" onClick={onClick}>
          {showAll ? "Hide" : "Show"} bought items
        </button>
      </div>
    </div>
  );
}
