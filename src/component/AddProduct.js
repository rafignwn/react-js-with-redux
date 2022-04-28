import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSave(e) {
    e.preventDefault();
    await dispatch(saveProduct({ title, price }));
    navigate("/");
  }

  return (
    <div className="box">
      <h1 className="title is-4 has-text-centered">Add Product</h1>
      <form onSubmit={handleSave}>
        <div className="field">
          <label htmlFor="title" className="label">
            Title of Product
          </label>
          <div className="control">
            <input
              type="text"
              id="title"
              placeholder="title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="price" className="label">
            Price of Product
          </label>
          <div className="control">
            <input
              type="text"
              id="price"
              placeholder="price"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <button type="submit" className="button is-info">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
