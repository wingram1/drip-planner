import React, { useState, useEffect } from "react";
import CitySearch from "../Components/CitySearch";
import Map from "../Components/Map/Map";
import EditTrip from "../Components/EditTrip";

export function Home() {
  const [locationSelect, setLocationSelect] = useState([39.0997, -94.5786]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <h1 style={{ position: "absolute", left: "60px", zIndex: 2 }}>
        Drip Planner
      </h1> */}
      <Map locationSelect={locationSelect} />
      <CitySearch />
      <EditTrip />
    </div>
  );
}

export default Home;
