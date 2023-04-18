import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import countries from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
class MyLMap extends Component {
  state = {};
  componentDidMount() {
    console.log(countries);
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My leaflet-map </h1>
        <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
          <GeoJSON data={countries.features} />
        </MapContainer>
      </div>
    );
  }
}

export default MyLMap;
