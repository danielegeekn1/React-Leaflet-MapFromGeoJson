import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import countries from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./../components/myLMap.css";
class MyLMap extends Component {
  state = { color: "#ffff00" };
  //color = ["green", "blue", "yellow", "orange", "grey"];
  componentDidMount() {
    console.log(countries);
  }
  changeStyleOnMouseOver = (event) => {
    event.target.setStyle({
      color: "green",
      //fillColor: "yellow",
      fillColor: this.state.color,
      fillOpacity: 0.5,
    });
  };
  backToOriginalStyle = (event) => {
    event.target.setStyle({
      fillColor: "red",
      fillOpacity: 0.8,
      color: "black",
      weight: 2,
    });
  };
  onEachCountry = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    layer.bindPopup(countryName + "population:");
    // const colorIndex = Math.floor(Math.random() * this.color.length);
    // layer.options.fillColor = this.color[colorIndex];
    layer.on({
      mouseover: this.changeStyleOnMouseOver,
      mouseout: this.backToOriginalStyle,
    });
  };
  countriesStyle = {
    fillColor: "red", //color which fills the features countries
    fillOpacity: 0.8, //opacity from 0 to 1
    color: "black", //countries borders
    weight: 2, //size of our contries borders
    // dashArray: 3, this set our countries border to be set with separete points
  };
  ColorChange = (e) => {
    this.setState({ color: e.target.value });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My leaflet-map </h1>
        <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
          <GeoJSON
            style={this.countriesStyle}
            data={countries.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
        <input
          type="color"
          value={this.state.color}
          onChange={this.ColorChange}
        />
      </div>
    );
  }
}

export default MyLMap;
