import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import "./Checkout.css";
function Checkout() {
  const total = useSelector((state) => state.cart.total);

  const [stripeToken, setStripeToken] = useState(null);

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
    <div className="checkout">
      <h2>ORDER SUMMARY</h2>
      <div className="order__type">
        <p>Subtotal</p>
        <p>$80</p>
      </div>
      <div className="order__type">
        <p>Estimating Shipping</p>
        <p>$44.99</p>
      </div>
      <div className="order__type">
        <p>Shipping Discount</p>
        <p>$-4.90</p>
      </div>
      <div className="order__type total">
        <p>Total</p>
        <p>{total.toFixed(2)}</p>
      </div>
      <StripeCheckout
        name="sami Shop"
        image="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg"
        billingAddress
        shippingAddress
        description={`yout total is ${total}`}
        amount={total * 100}
        token={onToken}
        stripeKey={process.env.STRIPE_SEC}
      >
        <button className="checkout__btn2">CHECKOUT NOW</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
