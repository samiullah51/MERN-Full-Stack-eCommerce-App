import React, { useState } from "react";
import "./UpdateProduct.css";
function UpdateProduct() {
  const [qty, setQty] = useState(1);
  const hanldeClick = (type) => {
    if (type === "inc") {
      setQty(qty + 1);
    } else {
      qty > 1 && setQty(qty - 1);
    }
  };
  return (
    <div>
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

export default UpdateProduct;
