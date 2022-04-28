import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelector,
  deleteProduct,
} from "../features/productSlice";
import { Link } from "react-router-dom";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, [dispatch]);

  function handleDelete(id) {
    // jika jawaban yes maka data akan lanjut dihapus
    window.confirm("apakah anda yakin ?") && dispatch(deleteProduct(id));
  }

  return (
    <div className="box">
      <h1 className="title has-text-centered">Data Products</h1>
      <Link to={"add"} className="button is-info">
        Add Product
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            const price = parseInt(item.price).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            });
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{price}</td>
                <td>
                  <Link
                    to={`edit/${item.id}`}
                    className="button is-primary mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="button is-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
