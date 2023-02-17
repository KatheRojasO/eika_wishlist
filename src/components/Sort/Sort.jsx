import React from "react";

import { sortListByName, sortListByPrice } from './Sorter';

export default function Sort({ list, setList }) {
  const sortByName = () => {
    const sortedList = sortListByName(list);
    setList(sortedList);
  };

  const sortByPrice = () => {
    const sortedList = sortListByPrice(list);
    setList(sortedList);
  };

  return (
    <div className="sort-container">
      <div className="container">
        <span className="sort-label">Sort by: </span>
        <button className="sort-button" onClick={() => sortByName()}>
          Name
        </button>
        <button className="sort-button" onClick={() => sortByPrice()}>
          Price
        </button>
      </div>
    </div>
  );
}
