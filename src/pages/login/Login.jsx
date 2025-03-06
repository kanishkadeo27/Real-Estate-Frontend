import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import "./login.scss";
const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Welcome Back</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              minLength={3}
              maxLength={20}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <button disabled={isLoading}>Login</button>
            {error && <span className="error">{error.slice(0, 22)}</span>}
            <Link to="/register" className="loginLink">
              Don't have an account?
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

export default Login;
