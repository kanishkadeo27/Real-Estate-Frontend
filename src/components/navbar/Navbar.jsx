import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleHemBurgerClick() {
    setOpen((prev) => !prev);
  }

  // Close menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 738) {
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

        <ul className="navLinks">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/agents"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Agents
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="navLinks">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SignIn
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SignUp
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="menuIcon" onClick={handleHemBurgerClick}>
          <img src="/menu.png" alt="hamburger menu icon" />
        </div>

        {/* Mobile Menu */}
        <div className={`menu ${open ? "active" : ""}`}>
          <ul className="navLinks">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
              <NavLink
                to="/agents"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Agents
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SignIn
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
