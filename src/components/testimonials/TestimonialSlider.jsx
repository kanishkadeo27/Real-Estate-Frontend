import React, { useEffect, useState } from "react";
import "./testimonialSlider.scss";
import Testimonial from "./Testimonial";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="testimonials-slider">
        <Testimonial testimonial={testimonials[currentIndex]} />
      </div>
    </>
  );
};

export default TestimonialSlider;
