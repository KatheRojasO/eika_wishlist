import React from "react";

export default function Sort({ list, setList }) {
  const sortByName = () => {
    const sortedList = [...list];
    sortedList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setList(sortedList);
  };

  const sortByPrice = () => {
    const sortedList = [...list];
    sortedList.sort((a, b) => a.price - b.price);
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
