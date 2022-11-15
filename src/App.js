import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import WishList from "./pages/WishList";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/wishlist" element={<WishList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

    

