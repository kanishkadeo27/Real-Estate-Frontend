import React, { useState } from "react";
import "./slider.scss";
const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const handleSlider = (index) => {
    setImageIndex(index);
  };
  const handleArrowClick = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex((prev) => prev - 1);
      }
    } else if (direction === "right") {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/public/arrow.png"
              alt=""
              onClick={() => handleArrowClick("left")}
            />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/public/arrow.png"
              alt=""
              className="right"
              onClick={() => handleArrowClick("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="bigImage" onClick={() => handleSlider(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            alt="image"
            onClick={() => handleSlider(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
