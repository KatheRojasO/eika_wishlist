import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import List from "../components/List/List";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import Filter from "../components/Filter/Filter";
import "./WishList.css";

function WishList() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : [];
  });

  const [showAll, setShowAll] = useState(() => {
    const saved = localStorage.getItem("showAll");
    return saved ? JSON.parse(saved) : false;
  });

  // This code should be on App.jsx to
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(list));
    localStorage.setItem("showAll", JSON.stringify(showAll));
  }, [list, showAll]);

  // use functions for methods not constants
  const addItem = (item) => {
    setList([...list, item]);
  };

  const onChecked = (itemIndex) => {
    const updatedList = [...list];
    updatedList[itemIndex].checked = true;
    setList(updatedList);
  };

  // this should be on Sorter.jsx to make this page smaller
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

  // this should be on Sorter.jsx to make this page smaller
  const sortByPrice = () => {
    const sortedList = [...list];
    sortedList.sort((a, b) => a.price - b.price);
    setList(sortedList);
  };

  return (
    <div className="wishlist-app">
      <div className="header-container">
        <Header />
      </div>
      <Sort sortByName={sortByName} sortByPrice={sortByPrice} />
      <List showAll={showAll} list={list} onChecked={onChecked} />
      <AddItemForm addItem={addItem} />
      <Filter showAll={showAll} onClick={() => setShowAll(!showAll)} />
    </div>
  );
}

export default WishList;
