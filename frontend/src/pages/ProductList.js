import React, { useState } from "react";
import { useLocation } from "react-router";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import "./ProductList.css";
function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  // Handle Filter
  const hanldeFilter = (e) => {
    const value = e.target.value;

    setFilter({ ...filter, [e.target.name]: value });
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="catTitle">{cat}</h1>
      <div className="filter__container">
        <div className="filter">
          <h2>Filter Products:</h2>
          {/* Color */}
          <select name="color" onChange={hanldeFilter}>
            <option disabled>Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Orange</option>
            <option>Blue</option>
            <option>Dodgerblue</option>
            <option>Yellow</option>
          </select>
          {/* Size */}
          <select name="size" onChange={hanldeFilter}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        {/* Sort */}
        <div className="sort">
          <h2>Sort Products:</h2>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort} />
      <Footer />
    </div>
  );
}

export default ProductList;
