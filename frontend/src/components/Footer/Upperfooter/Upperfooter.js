import React from "react";

import SendIcon from "@mui/icons-material/Send";
import "./Upperfooter.css";
function Upperfooter() {
  return (
    <div className="upperfooter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="input">
        <input type="text" placeholder="Your email" />
        <div className="icon">
          <SendIcon />
        </div>
      </div>
    </div>
  );
}

export default Upperfooter;
