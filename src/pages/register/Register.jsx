import React, { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";

const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input type="text" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button disabled={isLoading}>Register</button>
            {error && <span className="error">{error.slice(0, 22)}</span>}
            <Link to="/login" className="loginLink">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
      <div className="imgContainer">
        <div className="wrapper">
          <img src="/public/bg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
