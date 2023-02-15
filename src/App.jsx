import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WishList from "./pages/WishList";


export default function App() {

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<WishList list={list} setList={setList} showAll={showAll} setShowAll={setShowAll}/>} />
      </Routes>
    </BrowserRouter>
  );
}
