import React, {useState, useEffect} from 'react';
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import List from "../components/List/List";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import Filter from "../components/Filter/Filter";
import "./WishList.css"

export default function WishList() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : []
  });

  const [showAll, setShowAll] = useState(() => {
    const saved = localStorage.getItem("showAll"); 
    return saved ? JSON.parse(saved) : false
  });

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(list));
    localStorage.setItem("showAll", JSON.stringify(showAll));
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
    <div className="wishlist-app">
      <div className='header-container'>
        <Header title="EIKA's Shopping list"/>
      </div>
      <Sort sortByName={sortByName} sortByPrice={sortByPrice} />
      <List showAll={showAll} list={list} onChecked={onChecked} />
      <AddItemForm addItem={addItem} />
      <Filter showAll={showAll} onClick={() => setShowAll(!showAll)} />     
    </div>
  );
}
