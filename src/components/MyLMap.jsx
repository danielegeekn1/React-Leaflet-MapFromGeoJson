import React, { Component } from "react";
import countries from "./../data/countries.json";
class MyLMap extends Component {
  state = {};
  componentDidMount() {
    console.log(countries);
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My leaflet-map </h1>
      </div>
    );
  }
}

export default MyLMap;
