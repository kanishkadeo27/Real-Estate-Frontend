import React from "react";
import "./about.scss";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about-page">
        <div className="about-content">
          <div className="wrapper">
            <h1>About Us</h1>
            <p>
              Welcome to <strong>DreamHome Realty</strong>, where we make your
              real estate dreams a reality. With over{" "}
              <strong>16 years of experience</strong> in the industry, we have
              been helping individuals and families find their perfect homes.
            </p>
            <p>
              Our dedicated team of professionals is committed to providing you
              with top-notch services, ensuring a seamless and stress-free
              property search experience. Whether you're looking to buy, sell,
              or rent a property, we've got you covered.
            </p>
            <p>
              We take pride in our <strong>1200+ ready properties</strong> and
              the <strong>200 awards</strong>
              we have gained through our excellence in the real estate market.
            </p>
            <div className="explore">
              <button onClick={() => navigate("/list")}>Explore More...</button>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/public/about-img.jpg" alt="About Us" />
        </div>
      </div>
    </>
  );
};

export default About;
