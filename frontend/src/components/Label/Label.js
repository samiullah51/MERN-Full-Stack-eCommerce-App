import React from "react";
import "./Label.css";
function Label({ label }) {
  return (
    <div className="label">
      <p className="label__text">{label}</p>
    </div>
  );
}

export default Label;
