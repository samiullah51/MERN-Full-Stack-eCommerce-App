import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { data } from "../../data";
function Slider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  };

  const nextSlide = () => {
    index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <div className="wrapper">
      <div className="slider">
        <div className="slider__left">
          <img src={data[index].img} alt="ad" />
        </div>
        <div className="slider__right">
          <h1>{data[index].title}</h1>
          <p>{data[index].desc}</p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="slider__control">
        <div className="icon" onClick={prevSlide}>
          <ArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
