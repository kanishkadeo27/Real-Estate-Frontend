import React, { useEffect } from "react";
import "./navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleHemBurgerClick() {
    setOpen(!open);
    console.log("clicked");
  }

  // Close menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 738) {
        // Adjust breakpoint accordingly
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="left">
        <a className="logo">
          <img src="/logo.png" alt="logo" />
          <span>KdEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        <a href="#">Signin</a>
        <a
          href="#"
          className="register
        "
        >
          Signup
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png "
            alt="hemburger menu icon"
            onClick={handleHemBurgerClick}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
          <a href="#">Signin</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
