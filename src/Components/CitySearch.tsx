import React, { useState, useEffect } from "react";

import { getCityWeather } from "../utils/getWeather";

export function CitySearch() {
  // state of search input
  const [inputState, setInputState] = useState("");
  const [inputSubmitted, setInputSubmitted] = useState(false);

  useEffect(() => {
    if (inputSubmitted) {
      console.log("hello");
      console.log(getCityWeather(inputState));
    }
  });

  // handles search submit
  const handleCitySearch = () => {
    setInputSubmitted(true);
  };

  return (
    <form
      id="citySearchForm"
      style={{
        zIndex: "2",
        width: "300px",
        height: "50px",
        border: "1px solid black",
        backgroundColor: "white",
        position: "absolute",
        right: "10px",
        top: "10px",
      }}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`inputState: ${inputState}`);
        handleCitySearch();
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
      ></input>
      <button type="submit" form="citySearchForm">
        Go!
      </button>
    </form>
  );
}

export default CitySearch;
