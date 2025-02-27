import React from "react";
import "./listItemCard.scss";
import { Link } from "react-router-dom";

const ListItemCard = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/list/${item?.id}`} className="imageContainer">
        <img src={item?.img} alt="image" />
      </Link>
      <div className="textContainer">
        <h1 className="title">
          <Link to={`/list/${item?.id}`}>{item.title}</Link>
        </h1>
        <p className="address">
          <img src="/public/pin.png" alt="address" />
          <span>{item.address}</span>
        </p>
        <p className="price">
          <span>${item.price}</span>
        </p>
        <div className="iconContainer">
          <div className="features">
            <p className="bedroom">
              <img src="/public/bed.png" alt="bedroom" />

              <span>{item.bedroom} Bedroom</span>
            </p>
            <p className="bathroom">
              <img src="/public/bath.png" alt="bathroom" />

              <span>{item.bathroom} Bathroom</span>
            </p>
          </div>
          <div className="icons">
            <img className="icon" src="/public/save.png" alt="save" />
            <img className="icon" src="/public/chat.png" alt="chat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemCard;
