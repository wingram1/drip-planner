import { useState, useEffect, useRef } from "react";

import L, { marker } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import { Icon } from "leaflet/src/layer/marker/Icon";

import { WeatherDetails } from "./WeatherDetails";

let defaultIcons = new L.Icon.Default();
defaultIcons.options.iconUrl = icon;
defaultIcons.options.iconRetinaUrl = icon2x;
defaultIcons.options.shadowUrl = iconShadow;

export function MapEventHandler() {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    39.0997, -94.5786,
  ]);
  const [mapClicked, setMapClicked] = useState(false);
  const markerRef = useRef<any>();

  // effect to render marker popup automatically
  // setTimeout to avoid race condition with setMapClicked
  useEffect(() => {
    setTimeout(() => {
      if (!markerRef.current) return;

      markerRef.current.openPopup();
    }, 250);
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
        <div style={{ minHeight: "200px", maxHeight: "fit-content" }}>
          <h4>You have clicked coordinates {selectedPosition}</h4>
          <WeatherDetails selectedPosition={selectedPosition} />
        </div>
      </Popup>
    </Marker>
  ) : null;
}

export default MapEventHandler;
