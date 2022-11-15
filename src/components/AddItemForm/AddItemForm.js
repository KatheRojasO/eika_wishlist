import React, { useRef } from "react";
import "./AddItemForm.css"

export default function AddItemForm({ addItem }) {
  const formRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const item = {
      name: e.target["name"].value,
      price: e.target["price"].value,
      checked: false,
    };
    addItem(item);
    formRef.current.reset();
  };

  return (
    <form onSubmit={submitHandler} className="add-container" ref={formRef}>
      <input
        name="name"
        className="add-input"
        type="text"
        placeholder="Name"
        required
      />
      <input
        name="price"
        className="add-input"
        type="number"
        placeholder="Price"
        required
      />
      <button className="add-button" type="submit">
        Add item
      </button>
    </form>
  );
}
