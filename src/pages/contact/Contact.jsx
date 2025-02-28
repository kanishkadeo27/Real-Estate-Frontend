import React, { useState } from "react";
import "./contact.scss";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="contact-page">
      <div className="contact-details">
        <div className="wrapper">
          <h1>Contact Us</h1>
          <p>
            <strong>DreamHome</strong>
          </p>
          <p>Email: contact@dreamhome.com</p>
          <p>Phone: +91 7523642654</p>
          <p>Address: 123 Dream Street, Real Estate City, USA</p>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95565131568345!3d-37.8173221797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fbc6ab%3A0xf4c0c2e0bbafc6b!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1648457456391!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="wrapper">
          <h1>Get In Touch</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => handleInputChange(e)}
              name="name"
              value={contact.name}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => handleInputChange(e)}
              name="email"
              value={contact.email}
            />
            <input
              type="tel"
              placeholder="Your Contact Number"
              required
              onChange={(e) => handleInputChange(e)}
              name="phone"
              value={contact.phone}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              onChange={(e) => handleInputChange(e)}
              name="message"
              value={contact.message}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
