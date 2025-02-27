import React, { useState } from "react";
import "./filterlist.scss";
const FilterLists = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState({
    minPrice: null,
    maxPrice: null,
  });
  const [bedroom, setBedroom] = useState(null);
  const [type, setType] = useState("any");
  const [property, setProperty] = useState("any");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handlePriceChange = (e, type) => {
    if (type === "minimum") {
      setPrice((prev) => ({ ...prev, minPrice: e.target.value }));
    } else if (type === "maximum") {
      setPrice((prev) => ({ ...prev, maxPrice: e.target.value }));
    }
  };
  const handleBedroomChange = (e) => {
    setBedroom(e.target.value);
  };

  console.log(location, price.minPrice, price.maxPrice, bedroom);
  return (
    <div className="filterList">
      <h1>
        Search Results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="City Location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" value={type}>
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" value={property}>
            <option value="">any</option>
            <option value="apartment">apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="any"
            value={price.minPrice}
            onChange={(e) => handlePriceChange(e, "minimum")}
          />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="any"
            value={price.maxPrice}
            onChange={(e) => handlePriceChange(e, "maximum")}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            name="bedroom"
            min={0}
            max={10000000}
            placeholder="any"
            value={bedroom}
            onChange={handleBedroomChange}
          />
        </div>
        <button>
          <img src="/public/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FilterLists;
