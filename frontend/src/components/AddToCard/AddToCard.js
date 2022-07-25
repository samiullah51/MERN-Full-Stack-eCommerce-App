import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/Cart/cartTypes";
import "./AddToCard.css";
function AddToCard({ product, color, size }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, qty, color, size },
    });
  };

  const hanldeClick = (type) => {
    if (type === "inc") {
      setQty(qty + 1);
    } else {
      qty > 1 && setQty(qty - 1);
    }
  };
  return (
    <div className="addtocard">
      <div className="right">
        {/* <UpdateProduct /> */}
        <button className="cart__btn" onClick={handleClick}>
          ADD TO CART
        </button>
      </div>
      <div className="left">
        <button className="sign" onClick={() => hanldeClick("dec")}>
          -
        </button>
        <p className="counter">{qty}</p>
        <button className="sign" onClick={() => hanldeClick("inc")}>
          +
        </button>
      </div>
    </div>
  );
}

export default AddToCard;
