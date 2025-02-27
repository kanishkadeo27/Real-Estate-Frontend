import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import Pin from "./Pin";
const Map = ({ items }) => {
  const position = [52.4797, -1.90269];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
      style={{ width: "100%", height: "100%", minHeight: "400px" }} // Ensure full width
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
