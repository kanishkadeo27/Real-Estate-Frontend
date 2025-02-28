import React from "react";
import "./agentCard.scss";

const AgentCard = ({ agent }) => {
  return (
    <>
      <div className="agent-card">
        <div className="imgDiv">
          <img src={agent.image} alt={agent.name} />
        </div>
        <div className="infoDiv">
          <div className="left">
            <h3>{agent.name}</h3>
            <p>{agent.position}</p>
            <p>
              <strong>Experience:</strong> {agent.experience}
            </p>
            <p className="contact-info">
              {agent.email} <br />
              {agent.phone}
            </p>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              excepturi molestiae consequuntur adipisci, veritatis quis soluta
              ab libero quisquam quas tempora. Maxime quia, praesentium quos
              excepturi maiores earum eum. Harum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCard;
