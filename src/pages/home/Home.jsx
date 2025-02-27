import React from "react";
import "./home.scss";
import SearchBar from "../../components/searchBar/SearchBar";
const Home = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            explicabo dolores inventore similique soluta veritatis delectus
            fugit commodi harum totam, quidem, dolor sed adipisci unde illo
            repudiandae, ab sequi ducimus.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
