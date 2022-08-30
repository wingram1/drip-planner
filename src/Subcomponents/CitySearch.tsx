import React, { useState, useEffect } from "react";

import { getCityWeather } from "../utils/getWeather";

export default function CitySearch() {
  // state of search input
  const [inputState, setInputState] = useState("");

  // handles search submit
  const handleCitySearch = (e: React.FormEvent<HTMLInputElement>) => {
    getCityWeather(inputState);
  };

  return (
    <form
      id="citySearchForm"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`inputState: ${inputState}`);
      }}
    >
      <input
        id="citySearch"
        name="citySearch"
        placeholder="Search for a City"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputState(e.target.value);
          console.log(e.target.value);
        }}
        onSubmit={handleCitySearch}
      ></input>
      <button type="submit" form="citySearchForm">
        Go!
      </button>
    </form>
  );
}
