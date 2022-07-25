import React from "react";
import "./Lowerfooter.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function Lowerfooter() {
  return (
    <div className="lowerfooter">
      <div className="lowerfooter__left">
        <h1>Sami</h1>
        <p>
          lorem must have an alt prop, either with meaningful text, or an empty
          string for decorative images lorem must have an alt prop, either with
          meaningful text, or an empty string for decorative images
        </p>
        <div className="socials">
          <img src="/images/socials/fb.png" alt="facebook" />
          <img src="/images/socials/ig.png" alt="instagram" />
          <img src="/images/socials/pen.png" alt="pentrist" />
          <img src="/images/socials/tw.png" alt="twitter" />
        </div>
      </div>
      <div className="lowerfooter__right">
        <h1>Contact</h1>
        <div className="info">
          <LocationOnIcon />
          <p>Pabbi Station (NSR), Wazir Garhi</p>
        </div>
        <div className="info">
          <CallIcon />
          <p>+92 348 1910747</p>
        </div>
        <div className="info">
          <MailOutlineIcon />
          <p>samii51728@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Lowerfooter;
