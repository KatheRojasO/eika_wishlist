import React from "react";
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import List from "../components/List/List";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import Filter from "../components/Filter/Filter";

export default function WishList({ list, setList, showAll, setShowAll }) {
  const addItem = (item) => {
    setList([...list, item]);
  };

  const onChecked = (item) => {
    const itemIndex = list.indexOf(item);
    const updatedList = [...list];
    updatedList[itemIndex].checked = true;
    setList(updatedList);
  };

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
