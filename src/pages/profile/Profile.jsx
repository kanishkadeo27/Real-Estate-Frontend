import React, { useState } from "react";
import "./profile.scss";
import ProfileList from "../../components/profileList/ProfileList";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";
const Profile = () => {
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
  return (
    <div className="profile">
      <div className="userDetails">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="infoContainer">
            <span>
              Avatar:
              <img src="/public/favicon.png" alt="" />
            </span>
            <span>
              Username:<b>John Doe</b>
            </span>
            <span>
              Email:<b>johndoe@gmail.com</b>
            </span>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
            {error && <span className="error">{error}</span>}
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <ProfileList />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <ProfileList />
        </div>
      </div>
      <div className="chatComponent">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
