import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { marker } from "leaflet";

import { MapEventHandler } from "./Subcomponents/MapEventHandler";

export function Map(props: any) {
  return (
    <MapContainer
      center={[39.0997, -94.5786]}
      zoom={5}
      id="map"
      style={{ width: "100%", height: "80vh", margin: "0 auto" }}
    >
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JhdmlkZGQiLCJhIjoiY2wwZDh3eDE2MDZ1OTNrcGYybjhsNmN2diJ9.cPvRZK6WTt_wjQSa-DzblQ"
      />
      <MapEventHandler />
    </MapContainer>
  );
}

export default Map;
