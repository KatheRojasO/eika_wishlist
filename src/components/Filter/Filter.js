import React from 'react';
import "./Filter.css"

export default function Filter({ onClick, showAll }) {
    return (
      <div className="filter-container">
        <button className="filter-button" onClick={onClick}>
          {showAll ? "Hide" : "Show"} completed items
        </button>
      </div>
    );
  }