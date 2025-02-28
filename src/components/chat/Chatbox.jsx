import React from "react";
import "./chatbox.scss";
const Chatbox = ({ setChat }) => {
  return (
    <>
      <div className="top">
        <div className="user">
          <img src="/public/favicon.png" alt="" />
          John Doe
        </div>
        <span className="close" onClick={() => setChat(null)}>
          X
        </span>
      </div>
      <div className="center">
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
        <div className="chatMessage own">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <span>1 hour ago</span>
        </div>
      </div>
      <div className="bottom">
        <textarea name="" id=""></textarea>
        <button>Send</button>
      </div>
    </>
  );
};

export default Chatbox;
