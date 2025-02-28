import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true; //auth

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
          <span>DreamHome</span>
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
        {user ? (
          <div className="userDiv">
            <div className="username">
              <img src="/public/favicon.png" alt="" />
              <span>John Doe</span>
            </div>
            <div className="profile">
              <NavLink className="profileLink" to="/profile">
                Profile
              </NavLink>
              <span className="notification">+3</span>
            </div>
          </div>
        ) : (
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
        )}

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
