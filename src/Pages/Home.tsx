import React, { useState, useEffect } from "react";

import Map from "../Components/Map";
import CitySearch from "../Subcomponents/CitySearch";

export function Home() {

  const [locationSelect, setLocationSelect] = useState([39.0997, -94.5786])

  return (
    <div>
      <h1>Hello Drip Planner!</h1>
      <CitySearch />
      <Map locationSelect={locationSelect}/>
    </div>
  );
}

export default Home;
