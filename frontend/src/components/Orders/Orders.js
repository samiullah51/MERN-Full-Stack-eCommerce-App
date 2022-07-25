import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART } from "../../redux/Cart/cartTypes";
import "./Orders.css";
function Orders({ order }) {
  const dispatch = useDispatch();
  const filtered = (id) => {
    dispatch({ type: REMOVE_FROM_CART, id: id, price: order.price });
  };

  return (
    <div className="order">
      <div className="left">
        <div className="left__left">
          <img src={order.img} />
          <div className="left__detail">
            <p className="title">
              <b>Product: </b> {order.title}
            </p>
            <p id="id">
              <b>ID: </b>
              {order._id}
            </p>
            <div
              className="color"
              style={{ backgroundColor: order.color }}
            ></div>
            <p className="size">
              <b>Size:</b> {order.size}
            </p>
          </div>
        </div>
        <div className="left__right">
          <p>${order.price * order.qty}</p>
          <button className="remove" onClick={() => filtered(order._id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Orders;
