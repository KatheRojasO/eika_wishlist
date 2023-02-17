import { React, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import List from "../components/List/List";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import Filter from "../components/Filter/Filter";

export default function WishList() {
  
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : []
  });

  const [showAll, setShowAll] = useState(() => {
    const saved = localStorage.getItem("showAll"); 
    return saved ? JSON.parse(saved) : false
  });

  const addItem = (item) => {
    setList([...list, item]);
  };

  const onChecked = (item) => {
    const itemIndex = list.indexOf(item);
    const updatedList = [...list];
    updatedList[itemIndex].checked = true;
    setList(updatedList);
  };
  
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(list));
    localStorage.setItem("showAll", JSON.stringify(showAll));
  }, [list, showAll])

  return (
    <div className="wishlist-app">
      <div className="container">
        <Header title="EIKA's Shopping list" />
        <Sort list={list} setList={setList} />
        <List showAll={showAll} list={list} onChecked={onChecked} />
        <AddItemForm addItem={addItem} />
        <Filter showAll={showAll} onClick={() => setShowAll(!showAll)} />
      </div>
    </div>
  );
}
