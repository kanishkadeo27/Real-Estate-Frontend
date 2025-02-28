import React from "react";
import { agentsData, testimonials } from "../../lib/dummyData";

import "./agents.scss";
import AgentCard from "../../components/agent/AgentCard";
import TestimonialsSlider from "../../components/testimonials/TestimonialSlider";

const Agents = () => {
  return (
    <>
      <div className="agents-page">
        <div className="agents-section">
          <div className="wrapper">
            <div className="agents-list">
              <h1>Meet Our Agents</h1>
              <div className="agents-container">
                {agentsData.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Testimonials Slider */}
        <div className="testimonials-section">
          <div className="wrapper">
            <img
              src="/public/testimonial.jpg"
              alt="main img"
              className="testimonial-img"
            />
            <h1>Testimonials</h1>
            <p className="desc">See what our clients says!</p>
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
