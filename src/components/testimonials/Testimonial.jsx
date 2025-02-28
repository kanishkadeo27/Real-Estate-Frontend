import React from "react";
import "./testimonial.scss";
const Testimonial = ({ testimonial }) => {
  return (
    <>
      <div className="testimonial-card">
        <img src={testimonial.image} alt={testimonial.name} />
        <p className="feedback">"{testimonial.feedback}"</p>
        <h4>{testimonial.name}</h4>
      </div>
    </>
  );
};

export default Testimonial;
