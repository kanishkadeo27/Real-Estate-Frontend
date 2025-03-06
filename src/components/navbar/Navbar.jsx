import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  const userInfo = JSON.parse(localStorage.getItem("user"));

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
        {userInfo ? (
          <div className="userDiv">
            <div className="username">
              {/* <img src="/public/favicon.png" alt="" /> */}
              <img src={userInfo.avatar} alt="null" />
              <span>{userInfo.username}</span>
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
              {userInfo ? (
                <>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    onClick={handleLogout}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
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
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
