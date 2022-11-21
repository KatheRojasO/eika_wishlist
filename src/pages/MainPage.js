import React from "react";
import { useNavigate } from "react-router-dom";
import eika_main from "../assets/eika_main.jpg";
import Header from "../components/Header/Header";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  // make this a function not a const.
  const handleClick = () => {
    navigate("/wishlist");
  };

  return (
    <div className="main-container">
      {/* Don't use div inside divs */}
      <div className="header-container">
        <Header />
      </div>

      <img src={eika_main} className="app-image" alt="main-page-img" />

      <div className="main-paragraph-container">
        <p className="main-paragraph">
          Welcome to EIKA's shopping list. Here you will be able to create a
          todo list with the furniture you want to buy.
        </p>
        <p className="main-paragraph">
          To get started press the add new Item buttom and a popup will ask you
          the name and the price of the item. You can also add and image after
          the item is added by touching the camera icon.
        </p>
      </div>

      <button className="add-button-main" type="button" onClick={handleClick}>
        Add a new item
      </button>
    </div>
  );
}

export default MainPage;
