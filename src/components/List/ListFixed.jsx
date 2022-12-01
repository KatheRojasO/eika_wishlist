import React from "react";
import ListItem from "../ListItem/ListItem";

// This is the only bad code so far in your
export default function List({ showAll, list, onChecked }) {
  // Properties
  const checkList = list.filter((item) => item.checked === true);
  const uncheckList = list.filter((item) => item.checked === false);

  // methods
  function createList(list) {
    return list.map((item, index) => (
      <ListItem
        key={`item-${index}`}
        item={item}
        onChange={() => onChecked(index)}
      />
    ));
  }

  // components
  const ListCheckedItems = createList(checkList);
  const ListUnkCheckedItems = createList(uncheckList);

  return (
    <div className="list-container">
      {ListItem}
      {showAll && ListUnckeckedItems}
    </div>
  );
}
