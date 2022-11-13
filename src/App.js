import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";
import List from "./components/List";
import AddItemForm from "./components/AddItemForm"
import Filter from "./components/Filter"

function App() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("shoppingList") 
    return saved ? JSON.parse(saved) : []
  });

  const [showAll, setShowAll] = useState(() => {
    const saved = localStorage.getItem("showAll") 
    return saved ? JSON.parse(saved) : false
  });

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(list))
    localStorage.setItem("showAll", JSON.stringify(showAll))
  }, [list, showAll])

  const addItem = (item) => {
    setList([...list, item]);
  };

  const onChecked = (itemIndex) => {
    const updatedList = [...list];
    updatedList[itemIndex].checked = true;
    setList(updatedList);
  };

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
    <div className="wishlist stack-large">
      <Header />
      <Sort sortByName={sortByName} sortByPrice={sortByPrice} />
      <List showAll={showAll} list={list} onChecked={onChecked} />
      <AddItemForm addItem={addItem} />
      <Filter showAll={showAll} onClick={() => setShowAll(!showAll)} />
    </div>
  );
}

export default App;
