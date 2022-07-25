import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function Category({ cat }) {
  return (
    <Link to={`products/${cat.cat}`}>
      <div className="category">
        <img src={cat.img} alt="Category" />
        <div className="category__info">
          <h3>{cat.title}</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </Link>
  );
}

export default Category;
