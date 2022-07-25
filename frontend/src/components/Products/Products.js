import React, { useState, useEffect } from "react";
import Product from "./Product/Product";
import axios from "axios";

import "./Products.css";
function Products({ cat, filter, sort }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filter, cat]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? filterProducts.map((product) => (
            <Product key={product.id} img={product.img} product={product} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}

export default Products;
