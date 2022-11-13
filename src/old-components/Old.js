import React, { useState } from "react";
import { nanoid } from "nanoid";
import logo from "./assets/logo.svg";
import Wishlist from "./components/Wishlist";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Header() {
  return (
    <>
      <header>
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="label-wrapper">Shopping list</h1>
      </header>
    </>
  );
}

function Filters(props) {
  return (
    <div className="filter-container">
      <span className="filter-label">Sort by: </span>
      <button className="filter-button">Name</button>
      <button className="filter-button">Price</button>
    </div>
  );
}

function App(props) {
  const [items, setItems] = useState([]);

  const [filter, setFilter] = useState("All");

  const wishList = items
    .filter(FILTER_MAP[filter])
    .map((item) => (
      <Wishlist
        id={item.id}
        name={item.name}
        completed={item.completed}
        key={item.id}
        toggleItemBought={toggleItemBought}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    ));

  function addItem(name) {
    const newItem = { id: `item-${nanoid()}`, name, completed: false };
    setItems([...items, newItem]);
    console.log(newItem);
  }

  const tasksNoun = wishList.length !== 1 ? "tasks" : "task";
  const headingText = `${wishList.length} tasks remaining`;

  function toggleItemBought(id) {
    const updatedItems = items.map((item) => {
      // if this task has the same ID as the edited task
      if (id === item.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
    console.log(items);
  }

  function deleteItem(id) {
    const remainingItems = items.filter((item) => id !== item.id);
    setItems(remainingItems);
    console.log(id);
  }

  function editItem(id, newName) {
    const editedItemList = items.map((item) => {
      // if this task has the same ID as the edited task
      if (id === item.id) {
        //
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(editedItemList);
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="wishlist stack-large">
      <Header />
      <Filters />

      <Form addItem={addItem} />

      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {wishList}
      </ul>
      {filterList}
    </div>
  );
}

export default App;
