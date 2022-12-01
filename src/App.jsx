import React, { forwardRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WishList from "./pages/WishList";

// Put the export default here, to have 1 line exports.
// Please rename your React files from .js to .jsx to better know what is normal scripts and what are React components.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <button>Subir imagen</button>
        <button>Order por nombre</button>
      </Routes>
    </BrowserRouter>
  );
}
