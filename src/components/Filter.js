import React from 'react'

export default function Filter({ onClick, showAll }) {
    return (
      <div className="filter-container">
        <button className="filter-button" onClick={onClick}>
          {showAll ? "Hide" : "Show"} completed items
        </button>
      </div>
    );
  }