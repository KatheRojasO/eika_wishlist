import React from "react";
import ListItem from "../ListItem/ListItem";

export default function List({ showAll, list, onChecked }) {
  return (
    <div className="list-container">
      {list.map(
        (listItem, index) =>
          !listItem.checked && (
            <ListItem
              key={`item-${index}`}
              name={listItem.name}
              price={listItem.price}
              checked={listItem.checked}
              onChange={() => onChecked(index)}
            />
          )
      )}
      {showAll}
      {showAll &&
        list.map(
          (listItem, index) =>
            listItem.checked && (
              <ListItem
                key={`item-${index}`}
                name={listItem.name}
                price={listItem.price}
                checked={listItem.checked}
                onChange={() => {}}
              />
            )
        )}
    </div>
  );
}
