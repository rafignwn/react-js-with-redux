import React from "react";
import AddProduct from "./component/AddProduct";
import ShowProduct from "./component/ShowProduct";
import EditProduct from "./component/EditProduct";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowProduct />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
