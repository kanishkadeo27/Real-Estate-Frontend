import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "./../../components/map/Map";
const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="topContainer">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/public/pin.png" alt="address" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottomContainer">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/public/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/public/size.png" alt="" />
              <span>80swm(861sqft)</span>
            </div>
            <div className="size">
              <img src="/public/bed.png" alt="" />
              <span>2 Bed</span>
            </div>
            <div className="size">
              <img src="/public/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/public/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/school.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>500m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} width="100%" height="200px" />
          </div>
          <div className="buttons">
            <button>
              <img src="/public/chat.png" alt="" />
              Send Message
            </button>
            <button>
              <img src="/public/save.png" alt="message" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
