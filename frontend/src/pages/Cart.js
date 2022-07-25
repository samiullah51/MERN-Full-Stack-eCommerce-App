import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Announcement from "../components/Announcement/Announcement";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Orders from "../components/Orders/Orders";
import { orders, prodcts } from "../data";

import "./Cart.css";
function Cart() {
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  const total = useSelector((state) => state.cart.total);

  const [stripeToken, setStripeToken] = useState(null);

  const KEY =
    "pk_test_51LExpFDuU8YXYPzpUKaZg32VahXT9Mjhcq6k5ci8NUrVok7ro7TjY5cKLQdJx6VhIZTHKLxqc0eqSFAgL0UwyssP00a00tMBKi";
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: { total },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div>
      <Navbar />
      <Announcement />

      <div className="cart">
        <h1>YOUR BAG</h1>
        <div className="cart__bag">
          <Link to="/products">
            <button className="shopping__btn">CONTINUE SHOPPING</button>
          </Link>
          <div className="midd__cart">
            <a href="#">Shopping Bag (2)</a>
            <a href="#">Your Wishlist (0)</a>
          </div>
          <StripeCheckout
            name="sami Shop"
            image="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg"
            billingAddress
            shippingAddress
            description={`yout total is ${total}`}
            amount={total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="checkout__btn">CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
      </div>
      {/* Order */}
      <div className="orders">
        <div className="orders__left">
          {products.map((prod) => (
            <Orders key={prod.id} order={prod} />
          ))}
        </div>

        {/* Check out */}
        <div className="orders__right">
          <Checkout />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
