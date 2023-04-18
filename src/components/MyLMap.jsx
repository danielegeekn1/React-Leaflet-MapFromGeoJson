import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import countries from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./../components/myLMap.css";
class MyLMap extends Component {
  state = {};
  componentDidMount() {
    console.log(countries);
  }
  onEachCountry = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    //console.log(countryName);
    layer.bindPopup(countryName);
  };
  countriesStyle = {
    fillColor: "red", //color which fills the features countries
    fillOpacity: 0.8, //opacity from 0 to 1
    color: "black", //countries borders
    weight: 2, //size of our contries borders
    // dashArray: 3, this set our countries border to be set with separete points
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
      </div>
    );
  }
}

export default MyLMap;
