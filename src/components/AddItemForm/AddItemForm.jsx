import React, { useRef } from "react";

export default function AddItemForm({ addItem }) {
  const formRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const item = {
      name: e.target["product"].value,
      price: e.target["price"].value,
      checked: false,
    };
    addItem(item);
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={submitHandler}
      aria-label="form"
      className="add-container"
      ref={formRef}
    >
      <div className="container">
        <input
          name="product"
          className="add-input"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="price"
          className="add-input"
          type="number"
          min="0"
          placeholder="Price"
          required
        />
        <button className="add-button" type="submit">
          Add item
        </button>
      </div>
    </form>
  );
}
