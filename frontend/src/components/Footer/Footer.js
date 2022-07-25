import React from "react";
import Upperfooter from "./Upperfooter/Upperfooter";
import "./Footer.css";
import Lowerfooter from "./Lowerfooter/Lowerfooter";
function Footer() {
  return (
    <div className="footer">
      <Upperfooter />
      <Lowerfooter />
    </div>
  );
}

export default Footer;
