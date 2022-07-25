import React from "react";

import "./Categories.css";
import Category from "./Category/Category";
import { categories } from "../../data";
function Categories() {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default Categories;
