import { useState, useRef, useEffect } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import { Icon } from "leaflet/src/layer/marker/Icon"

let defaultIcons = new L.Icon.Default();
defaultIcons.options.iconUrl = icon;
defaultIcons.options.iconRetinaUrl = icon2x;
defaultIcons.options.shadowUrl = iconShadow;

export function Map(props: any) {
  const { locationSelect } = props;

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    39.0997, -94.5786,
  ]);
  const [mapClicked, setMapClicked] = useState(false);

  // to be moved into a subcomponent file
  const MapEventHandler = function () {
    const markerRef = useRef<any>();

    useEffect(() => {
      if (!markerRef.current) return;
      markerRef.current.openPopup();
    });

    const events = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        events.flyTo(e.latlng, 8);
        setMapClicked(true);
      },
    });

    return mapClicked ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
        icon={defaultIcons}
        ref={markerRef}
      >
        <Popup>
          {/*  //TODO: API request to get city on click
        //TODO: Display forecast information for city
        //TODO: Button to start trip creation */}
          <div style={{ height: "200px" }}>
            <h4>You have clicked coordinates {selectedPosition}</h4>
          </div>
        </Popup>
      </Marker>
    ) : null;
  };

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
