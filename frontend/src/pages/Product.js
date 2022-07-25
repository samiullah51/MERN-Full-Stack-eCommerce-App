import React, { useEffect, useState } from "react";
import "./Product.css";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AddToCard from "../components/AddToCard/AddToCard";
import { useLocation } from "react-router";
import axios from "axios";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("L");
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="product__container">
        <div className="product__left">
          <img src={product.img} alt="Product" />
        </div>
        <div className="product__right">
          <h1>{product.title}</h1>
          <p className="desc">{product.desc}</p>
          <p className="price"> ${product.price}</p>
          <div className="color__container">
            <p>Color</p>

            {product.color?.map((c) => (
              <div
                className="color"
                key={c}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              ></div>
            ))}

            {/* Size */}
            <p style={{ marginLeft: "50px" }}>Size</p>

            <select onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          {/* Add to Card */}
          <AddToCard product={product} color={color} size={size} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
