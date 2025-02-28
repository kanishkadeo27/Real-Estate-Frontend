import React, { useState } from "react";
import "./chat.scss";
import Message from "./Message";
import Chatbox from "./Chatbox";
const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Message key={index} />
        ))}
      </div>
      {chat && (
        <div className="chatbox">
          <Chatbox setChat={setChat} />
        </div>
      )}
    </div>
  );
};

export default Chat;
