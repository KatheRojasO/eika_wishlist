import React from "react";
import ListItem from "../ListItem/ListItem";

export default function List({ showAll, list, onChecked }) {
  // Properties
  const checkList = list.filter((item) => item.checked === false);
  const uncheckList = list.filter((item) => item.checked === true);

  // methods
  function createList(list) {
    return list.map((item, index) => (
      <ListItem
        key={`item-${index}`}
        item={item}
        onChange={() => onChecked(item)}
      />
    ));
  }

  // components
  const listCheckedItems = createList(checkList);
  const listUncheckedItems = createList(uncheckList);

  return (
    <div className="list-container">
      {listCheckedItems}
      {showAll && listUncheckedItems}
    </div>
  );
}
