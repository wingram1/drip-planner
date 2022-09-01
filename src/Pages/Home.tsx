import React, { useState, useEffect } from "react";

import Map from "../Components/Map/Map";
import CitySearch from "../Components/CitySearch";

export function Home() {
  const [locationSelect, setLocationSelect] = useState([39.0997, -94.5786]);

  return (
    <div>
      <h1>Drip Planner</h1>
      <CitySearch />
      <Map locationSelect={locationSelect} />
    </div>
  );
}

export default Home;
