import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getProducts,
  productSelector,
  updateProduct,
} from "../features/productSlice";

export default function EditProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => productSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  async function handleUpdate(e) {
    e.preventDefault();
    await dispatch(updateProduct({ id, title, price }));
    navigate("/");
  }

  return (
    <div className="box">
      <h1 className="title is-4 has-text-centered">Edit Product</h1>
      <form onSubmit={handleUpdate}>
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
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
