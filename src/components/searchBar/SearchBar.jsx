import React from "react";
import "./searchbar.scss";
import { useState } from "react";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (typeVal) => {
    setQuery((prev) => ({ ...prev, type: typeVal }));
  };
  return (
    <div className="searchbox">
      <div className="type">
        {types.map((type) => {
          return (
            <button
              key={type}
              className={query.type === type ? "active" : ""}
              onClick={() => switchType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
      <div className="form">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/public/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
