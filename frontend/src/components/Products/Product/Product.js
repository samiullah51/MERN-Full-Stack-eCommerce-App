import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.img} alt="Specific Product" />
      <div className="product__layer"></div>
      <div className="icons">
        <Link to={`/product/${product._id}`}>
          <SearchIcon className="icon" />
        </Link>
        <Link to={`/product/${product._id}`}>
          <ShoppingCartIcon className="icon" />
        </Link>
        <FavoriteBorderIcon className="icon" />
      </div>
    </div>
  );
}

export default Product;
